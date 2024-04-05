/*
 * Teleport
 * Copyright (C) 2023  Gravitational, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package utils

import (
	"bytes"
	"errors"
	"io"
	"net/http"

	"github.com/gravitational/trace"
)

// GetAndReplaceRequestBody returns the request body and replaces the drained
// body reader with io.NopCloser allowing for further body processing by http
// transport.
// If memory exhaustion is a concern, it is the caller's responsibility to wrap
// req.Body in an [io.LimitReader].
func GetAndReplaceRequestBody(req *http.Request) ([]byte, error) {
	if req.Body == nil || req.Body == http.NoBody {
		return []byte{}, nil
	}
	payload, err := io.ReadAll(req.Body)
	if err != nil {
		return nil, trace.Wrap(err)
	}

	// Replace the drained body with io.NopCloser reader allowing for further request processing by HTTP transport.
	req.Body = io.NopCloser(bytes.NewReader(payload))
	return payload, nil
}

// GetAndReplaceResponseBody returns the response body and replaces the drained
// body reader with io.NopCloser allowing for further body processing.
// If memory exhaustion is a concern, it is the caller's responsibility to wrap
// response.Body in an [io.LimitReader].
func GetAndReplaceResponseBody(response *http.Response) ([]byte, error) {
	if response.Body == nil {
		return []byte{}, nil
	}

	payload, err := io.ReadAll(response.Body)
	if err != nil {
		return nil, trace.Wrap(err)
	}

	response.Body = io.NopCloser(bytes.NewReader(payload))
	return payload, nil
}

// ReplaceRequestBody drains the old request body and replaces it with a new one.
func ReplaceRequestBody(req *http.Request, newBody io.ReadCloser) error {
	// drain and discard the request body to allow connection reuse.
	// No need to enforce a max request size, nor rely on callers to do so,
	// since we do not buffer the entire request body.
	_, err := io.Copy(io.Discard, req.Body)
	if err != nil && !errors.Is(err, io.EOF) {
		return trace.Wrap(err)
	}
	req.Body = newBody
	return nil
}

// RenameHeader moves all values from the old header key to the new header key.
func RenameHeader(header http.Header, oldKey, newKey string) {
	if oldKey == newKey {
		return
	}
	for _, value := range header.Values(oldKey) {
		header.Add(newKey, value)
	}
	header.Del(oldKey)
}

// IsRedirect returns true if the status code is a 3xx code.
func IsRedirect(code int) bool {
	if code >= http.StatusMultipleChoices && code <= http.StatusPermanentRedirect {
		return true
	}
	return false
}

// GetAnyHeader returns the first non-empty value by the provided keys.
func GetAnyHeader(header http.Header, keys ...string) string {
	for _, key := range keys {
		if value := header.Get(key); value != "" {
			return value
		}
	}
	return ""
}

// GetSingleHeader will return the header value for the key if there is exactly one value present.  If the header is
// missing or specified multiple times, an error will be returned.
func GetSingleHeader(headers http.Header, key string) (string, error) {
	values := headers.Values(key)
	if len(values) > 1 {
		return "", trace.BadParameter("multiple %q headers", key)
	} else if len(values) == 0 {
		return "", trace.NotFound("missing %q headers", key)
	} else {
		return values[0], nil
	}
}

// HTTPDoClient is an interface that defines the Do function of http.Client.
type HTTPDoClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// HTTPMiddleware defines a HTTP middleware.
type HTTPMiddleware func(next http.Handler) http.Handler

// ChainHTTPMiddlewares wraps an http.Handler with a list of middlewares. Inner
// middlewares should be provided before outer middlewares.
func ChainHTTPMiddlewares(handler http.Handler, middlewares ...HTTPMiddleware) http.Handler {
	if len(middlewares) == 0 {
		return handler
	}
	apply := middlewares[0]
	middlewares = middlewares[1:]
	if apply != nil {
		handler = apply(handler)
	}
	return ChainHTTPMiddlewares(handler, middlewares...)
}

// NoopHTTPMiddleware is a no-operation HTTPMiddleware that returns the
// original handler.
func NoopHTTPMiddleware(next http.Handler) http.Handler {
	return next
}
