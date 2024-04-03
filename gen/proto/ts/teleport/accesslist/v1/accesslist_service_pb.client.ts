/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter long_type_number,eslint_disable,add_pb_suffix,server_grpc1,ts_nocheck
// @generated from protobuf file "teleport/accesslist/v1/accesslist_service.proto" (package "teleport.accesslist.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// Copyright 2023 Gravitational, Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { AccessListService } from "./accesslist_service_pb";
import type { GetSuggestedAccessListsResponse } from "./accesslist_service_pb";
import type { GetSuggestedAccessListsRequest } from "./accesslist_service_pb";
import type { AccessRequestPromoteResponse } from "./accesslist_service_pb";
import type { AccessRequestPromoteRequest } from "./accesslist_service_pb";
import type { DeleteAccessListReviewRequest } from "./accesslist_service_pb";
import type { CreateAccessListReviewResponse } from "./accesslist_service_pb";
import type { CreateAccessListReviewRequest } from "./accesslist_service_pb";
import type { ListAllAccessListReviewsResponse } from "./accesslist_service_pb";
import type { ListAllAccessListReviewsRequest } from "./accesslist_service_pb";
import type { ListAccessListReviewsResponse } from "./accesslist_service_pb";
import type { ListAccessListReviewsRequest } from "./accesslist_service_pb";
import type { UpsertAccessListWithMembersResponse } from "./accesslist_service_pb";
import type { UpsertAccessListWithMembersRequest } from "./accesslist_service_pb";
import type { DeleteAllAccessListMembersRequest } from "./accesslist_service_pb";
import type { DeleteAllAccessListMembersForAccessListRequest } from "./accesslist_service_pb";
import type { DeleteAccessListMemberRequest } from "./accesslist_service_pb";
import type { UpsertAccessListMemberRequest } from "./accesslist_service_pb";
import type { Member } from "./accesslist_pb";
import type { GetAccessListMemberRequest } from "./accesslist_service_pb";
import type { ListAllAccessListMembersResponse } from "./accesslist_service_pb";
import type { ListAllAccessListMembersRequest } from "./accesslist_service_pb";
import type { ListAccessListMembersResponse } from "./accesslist_service_pb";
import type { ListAccessListMembersRequest } from "./accesslist_service_pb";
import type { CountAccessListMembersResponse } from "./accesslist_service_pb";
import type { CountAccessListMembersRequest } from "./accesslist_service_pb";
import type { GetAccessListsToReviewResponse } from "./accesslist_service_pb";
import type { GetAccessListsToReviewRequest } from "./accesslist_service_pb";
import type { DeleteAllAccessListsRequest } from "./accesslist_service_pb";
import type { Empty } from "../../../google/protobuf/empty_pb";
import type { DeleteAccessListRequest } from "./accesslist_service_pb";
import type { UpsertAccessListRequest } from "./accesslist_service_pb";
import type { AccessList } from "./accesslist_pb";
import type { GetAccessListRequest } from "./accesslist_service_pb";
import type { ListAccessListsResponse } from "./accesslist_service_pb";
import type { ListAccessListsRequest } from "./accesslist_service_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetAccessListsResponse } from "./accesslist_service_pb";
import type { GetAccessListsRequest } from "./accesslist_service_pb";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * AccessListService provides CRUD methods for Access List resources.
 *
 * @generated from protobuf service teleport.accesslist.v1.AccessListService
 */
export interface IAccessListServiceClient {
    /**
     * GetAccessLists returns a list of all access lists.
     *
     * @generated from protobuf rpc: GetAccessLists(teleport.accesslist.v1.GetAccessListsRequest) returns (teleport.accesslist.v1.GetAccessListsResponse);
     */
    getAccessLists(input: GetAccessListsRequest, options?: RpcOptions): UnaryCall<GetAccessListsRequest, GetAccessListsResponse>;
    /**
     * ListAccessLists returns a paginated list of all access lists.
     *
     * @generated from protobuf rpc: ListAccessLists(teleport.accesslist.v1.ListAccessListsRequest) returns (teleport.accesslist.v1.ListAccessListsResponse);
     */
    listAccessLists(input: ListAccessListsRequest, options?: RpcOptions): UnaryCall<ListAccessListsRequest, ListAccessListsResponse>;
    /**
     * GetAccessList returns the specified access list resource.
     *
     * @generated from protobuf rpc: GetAccessList(teleport.accesslist.v1.GetAccessListRequest) returns (teleport.accesslist.v1.AccessList);
     */
    getAccessList(input: GetAccessListRequest, options?: RpcOptions): UnaryCall<GetAccessListRequest, AccessList>;
    /**
     * UpsertAccessList creates or updates an access list resource.
     *
     * @generated from protobuf rpc: UpsertAccessList(teleport.accesslist.v1.UpsertAccessListRequest) returns (teleport.accesslist.v1.AccessList);
     */
    upsertAccessList(input: UpsertAccessListRequest, options?: RpcOptions): UnaryCall<UpsertAccessListRequest, AccessList>;
    /**
     * DeleteAccessList hard deletes the specified access list resource.
     *
     * @generated from protobuf rpc: DeleteAccessList(teleport.accesslist.v1.DeleteAccessListRequest) returns (google.protobuf.Empty);
     */
    deleteAccessList(input: DeleteAccessListRequest, options?: RpcOptions): UnaryCall<DeleteAccessListRequest, Empty>;
    /**
     * DeleteAllAccessLists hard deletes all access lists.
     *
     * @generated from protobuf rpc: DeleteAllAccessLists(teleport.accesslist.v1.DeleteAllAccessListsRequest) returns (google.protobuf.Empty);
     */
    deleteAllAccessLists(input: DeleteAllAccessListsRequest, options?: RpcOptions): UnaryCall<DeleteAllAccessListsRequest, Empty>;
    /**
     * GetAccessListsToReview will return access lists that need to be reviewed by
     * the current user.
     *
     * @generated from protobuf rpc: GetAccessListsToReview(teleport.accesslist.v1.GetAccessListsToReviewRequest) returns (teleport.accesslist.v1.GetAccessListsToReviewResponse);
     */
    getAccessListsToReview(input: GetAccessListsToReviewRequest, options?: RpcOptions): UnaryCall<GetAccessListsToReviewRequest, GetAccessListsToReviewResponse>;
    /**
     * CountAccessListMembers returns the count of access list members in an
     * access list.
     *
     * @generated from protobuf rpc: CountAccessListMembers(teleport.accesslist.v1.CountAccessListMembersRequest) returns (teleport.accesslist.v1.CountAccessListMembersResponse);
     */
    countAccessListMembers(input: CountAccessListMembersRequest, options?: RpcOptions): UnaryCall<CountAccessListMembersRequest, CountAccessListMembersResponse>;
    /**
     * ListAccessListMembers returns a paginated list of all access list members.
     *
     * @generated from protobuf rpc: ListAccessListMembers(teleport.accesslist.v1.ListAccessListMembersRequest) returns (teleport.accesslist.v1.ListAccessListMembersResponse);
     */
    listAccessListMembers(input: ListAccessListMembersRequest, options?: RpcOptions): UnaryCall<ListAccessListMembersRequest, ListAccessListMembersResponse>;
    /**
     * ListAllAccessListMembers returns a paginated list of all access list
     * members for all access lists.
     *
     * @generated from protobuf rpc: ListAllAccessListMembers(teleport.accesslist.v1.ListAllAccessListMembersRequest) returns (teleport.accesslist.v1.ListAllAccessListMembersResponse);
     */
    listAllAccessListMembers(input: ListAllAccessListMembersRequest, options?: RpcOptions): UnaryCall<ListAllAccessListMembersRequest, ListAllAccessListMembersResponse>;
    /**
     * GetAccessListMember returns the specified access list member resource.
     *
     * @generated from protobuf rpc: GetAccessListMember(teleport.accesslist.v1.GetAccessListMemberRequest) returns (teleport.accesslist.v1.Member);
     */
    getAccessListMember(input: GetAccessListMemberRequest, options?: RpcOptions): UnaryCall<GetAccessListMemberRequest, Member>;
    /**
     * UpsertAccessListMember creates or updates an access list member resource.
     *
     * @generated from protobuf rpc: UpsertAccessListMember(teleport.accesslist.v1.UpsertAccessListMemberRequest) returns (teleport.accesslist.v1.Member);
     */
    upsertAccessListMember(input: UpsertAccessListMemberRequest, options?: RpcOptions): UnaryCall<UpsertAccessListMemberRequest, Member>;
    /**
     * DeleteAccessListMember hard deletes the specified access list member
     * resource.
     *
     * @generated from protobuf rpc: DeleteAccessListMember(teleport.accesslist.v1.DeleteAccessListMemberRequest) returns (google.protobuf.Empty);
     */
    deleteAccessListMember(input: DeleteAccessListMemberRequest, options?: RpcOptions): UnaryCall<DeleteAccessListMemberRequest, Empty>;
    /**
     * DeleteAllAccessListMembers hard deletes all access list members for an
     * access list.
     *
     * @generated from protobuf rpc: DeleteAllAccessListMembersForAccessList(teleport.accesslist.v1.DeleteAllAccessListMembersForAccessListRequest) returns (google.protobuf.Empty);
     */
    deleteAllAccessListMembersForAccessList(input: DeleteAllAccessListMembersForAccessListRequest, options?: RpcOptions): UnaryCall<DeleteAllAccessListMembersForAccessListRequest, Empty>;
    /**
     * DeleteAllAccessListMembers hard deletes all access list members for an
     * access list.
     *
     * @generated from protobuf rpc: DeleteAllAccessListMembers(teleport.accesslist.v1.DeleteAllAccessListMembersRequest) returns (google.protobuf.Empty);
     */
    deleteAllAccessListMembers(input: DeleteAllAccessListMembersRequest, options?: RpcOptions): UnaryCall<DeleteAllAccessListMembersRequest, Empty>;
    /**
     * UpsertAccessListWithMembers creates or updates an access list with members.
     *
     * @generated from protobuf rpc: UpsertAccessListWithMembers(teleport.accesslist.v1.UpsertAccessListWithMembersRequest) returns (teleport.accesslist.v1.UpsertAccessListWithMembersResponse);
     */
    upsertAccessListWithMembers(input: UpsertAccessListWithMembersRequest, options?: RpcOptions): UnaryCall<UpsertAccessListWithMembersRequest, UpsertAccessListWithMembersResponse>;
    /**
     * ListAccessListReviews will list access list reviews for a particular access
     * list.
     *
     * @generated from protobuf rpc: ListAccessListReviews(teleport.accesslist.v1.ListAccessListReviewsRequest) returns (teleport.accesslist.v1.ListAccessListReviewsResponse);
     */
    listAccessListReviews(input: ListAccessListReviewsRequest, options?: RpcOptions): UnaryCall<ListAccessListReviewsRequest, ListAccessListReviewsResponse>;
    /**
     * ListAllAccessListReviews will list access list reviews for all access
     * lists.
     *
     * @generated from protobuf rpc: ListAllAccessListReviews(teleport.accesslist.v1.ListAllAccessListReviewsRequest) returns (teleport.accesslist.v1.ListAllAccessListReviewsResponse);
     */
    listAllAccessListReviews(input: ListAllAccessListReviewsRequest, options?: RpcOptions): UnaryCall<ListAllAccessListReviewsRequest, ListAllAccessListReviewsResponse>;
    /**
     * CreateAccessListReview will create a new review for an access list. It will
     * also modify the original access list and its members depending on the
     * details of the review.
     *
     * @generated from protobuf rpc: CreateAccessListReview(teleport.accesslist.v1.CreateAccessListReviewRequest) returns (teleport.accesslist.v1.CreateAccessListReviewResponse);
     */
    createAccessListReview(input: CreateAccessListReviewRequest, options?: RpcOptions): UnaryCall<CreateAccessListReviewRequest, CreateAccessListReviewResponse>;
    /**
     * DeleteAccessListReview will delete an access list review from the backend.
     *
     * @generated from protobuf rpc: DeleteAccessListReview(teleport.accesslist.v1.DeleteAccessListReviewRequest) returns (google.protobuf.Empty);
     */
    deleteAccessListReview(input: DeleteAccessListReviewRequest, options?: RpcOptions): UnaryCall<DeleteAccessListReviewRequest, Empty>;
    /**
     * AccessRequestPromote promotes an access request to an access list.
     *
     * @generated from protobuf rpc: AccessRequestPromote(teleport.accesslist.v1.AccessRequestPromoteRequest) returns (teleport.accesslist.v1.AccessRequestPromoteResponse);
     */
    accessRequestPromote(input: AccessRequestPromoteRequest, options?: RpcOptions): UnaryCall<AccessRequestPromoteRequest, AccessRequestPromoteResponse>;
    /**
     * GetSuggestedAccessLists returns suggested access lists for an access
     * request.
     *
     * @generated from protobuf rpc: GetSuggestedAccessLists(teleport.accesslist.v1.GetSuggestedAccessListsRequest) returns (teleport.accesslist.v1.GetSuggestedAccessListsResponse);
     */
    getSuggestedAccessLists(input: GetSuggestedAccessListsRequest, options?: RpcOptions): UnaryCall<GetSuggestedAccessListsRequest, GetSuggestedAccessListsResponse>;
}
/**
 * AccessListService provides CRUD methods for Access List resources.
 *
 * @generated from protobuf service teleport.accesslist.v1.AccessListService
 */
export class AccessListServiceClient implements IAccessListServiceClient, ServiceInfo {
    typeName = AccessListService.typeName;
    methods = AccessListService.methods;
    options = AccessListService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * GetAccessLists returns a list of all access lists.
     *
     * @generated from protobuf rpc: GetAccessLists(teleport.accesslist.v1.GetAccessListsRequest) returns (teleport.accesslist.v1.GetAccessListsResponse);
     */
    getAccessLists(input: GetAccessListsRequest, options?: RpcOptions): UnaryCall<GetAccessListsRequest, GetAccessListsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetAccessListsRequest, GetAccessListsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListAccessLists returns a paginated list of all access lists.
     *
     * @generated from protobuf rpc: ListAccessLists(teleport.accesslist.v1.ListAccessListsRequest) returns (teleport.accesslist.v1.ListAccessListsResponse);
     */
    listAccessLists(input: ListAccessListsRequest, options?: RpcOptions): UnaryCall<ListAccessListsRequest, ListAccessListsResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListAccessListsRequest, ListAccessListsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetAccessList returns the specified access list resource.
     *
     * @generated from protobuf rpc: GetAccessList(teleport.accesslist.v1.GetAccessListRequest) returns (teleport.accesslist.v1.AccessList);
     */
    getAccessList(input: GetAccessListRequest, options?: RpcOptions): UnaryCall<GetAccessListRequest, AccessList> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetAccessListRequest, AccessList>("unary", this._transport, method, opt, input);
    }
    /**
     * UpsertAccessList creates or updates an access list resource.
     *
     * @generated from protobuf rpc: UpsertAccessList(teleport.accesslist.v1.UpsertAccessListRequest) returns (teleport.accesslist.v1.AccessList);
     */
    upsertAccessList(input: UpsertAccessListRequest, options?: RpcOptions): UnaryCall<UpsertAccessListRequest, AccessList> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpsertAccessListRequest, AccessList>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteAccessList hard deletes the specified access list resource.
     *
     * @generated from protobuf rpc: DeleteAccessList(teleport.accesslist.v1.DeleteAccessListRequest) returns (google.protobuf.Empty);
     */
    deleteAccessList(input: DeleteAccessListRequest, options?: RpcOptions): UnaryCall<DeleteAccessListRequest, Empty> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteAccessListRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteAllAccessLists hard deletes all access lists.
     *
     * @generated from protobuf rpc: DeleteAllAccessLists(teleport.accesslist.v1.DeleteAllAccessListsRequest) returns (google.protobuf.Empty);
     */
    deleteAllAccessLists(input: DeleteAllAccessListsRequest, options?: RpcOptions): UnaryCall<DeleteAllAccessListsRequest, Empty> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteAllAccessListsRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * GetAccessListsToReview will return access lists that need to be reviewed by
     * the current user.
     *
     * @generated from protobuf rpc: GetAccessListsToReview(teleport.accesslist.v1.GetAccessListsToReviewRequest) returns (teleport.accesslist.v1.GetAccessListsToReviewResponse);
     */
    getAccessListsToReview(input: GetAccessListsToReviewRequest, options?: RpcOptions): UnaryCall<GetAccessListsToReviewRequest, GetAccessListsToReviewResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetAccessListsToReviewRequest, GetAccessListsToReviewResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * CountAccessListMembers returns the count of access list members in an
     * access list.
     *
     * @generated from protobuf rpc: CountAccessListMembers(teleport.accesslist.v1.CountAccessListMembersRequest) returns (teleport.accesslist.v1.CountAccessListMembersResponse);
     */
    countAccessListMembers(input: CountAccessListMembersRequest, options?: RpcOptions): UnaryCall<CountAccessListMembersRequest, CountAccessListMembersResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<CountAccessListMembersRequest, CountAccessListMembersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListAccessListMembers returns a paginated list of all access list members.
     *
     * @generated from protobuf rpc: ListAccessListMembers(teleport.accesslist.v1.ListAccessListMembersRequest) returns (teleport.accesslist.v1.ListAccessListMembersResponse);
     */
    listAccessListMembers(input: ListAccessListMembersRequest, options?: RpcOptions): UnaryCall<ListAccessListMembersRequest, ListAccessListMembersResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListAccessListMembersRequest, ListAccessListMembersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListAllAccessListMembers returns a paginated list of all access list
     * members for all access lists.
     *
     * @generated from protobuf rpc: ListAllAccessListMembers(teleport.accesslist.v1.ListAllAccessListMembersRequest) returns (teleport.accesslist.v1.ListAllAccessListMembersResponse);
     */
    listAllAccessListMembers(input: ListAllAccessListMembersRequest, options?: RpcOptions): UnaryCall<ListAllAccessListMembersRequest, ListAllAccessListMembersResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListAllAccessListMembersRequest, ListAllAccessListMembersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetAccessListMember returns the specified access list member resource.
     *
     * @generated from protobuf rpc: GetAccessListMember(teleport.accesslist.v1.GetAccessListMemberRequest) returns (teleport.accesslist.v1.Member);
     */
    getAccessListMember(input: GetAccessListMemberRequest, options?: RpcOptions): UnaryCall<GetAccessListMemberRequest, Member> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetAccessListMemberRequest, Member>("unary", this._transport, method, opt, input);
    }
    /**
     * UpsertAccessListMember creates or updates an access list member resource.
     *
     * @generated from protobuf rpc: UpsertAccessListMember(teleport.accesslist.v1.UpsertAccessListMemberRequest) returns (teleport.accesslist.v1.Member);
     */
    upsertAccessListMember(input: UpsertAccessListMemberRequest, options?: RpcOptions): UnaryCall<UpsertAccessListMemberRequest, Member> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpsertAccessListMemberRequest, Member>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteAccessListMember hard deletes the specified access list member
     * resource.
     *
     * @generated from protobuf rpc: DeleteAccessListMember(teleport.accesslist.v1.DeleteAccessListMemberRequest) returns (google.protobuf.Empty);
     */
    deleteAccessListMember(input: DeleteAccessListMemberRequest, options?: RpcOptions): UnaryCall<DeleteAccessListMemberRequest, Empty> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteAccessListMemberRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteAllAccessListMembers hard deletes all access list members for an
     * access list.
     *
     * @generated from protobuf rpc: DeleteAllAccessListMembersForAccessList(teleport.accesslist.v1.DeleteAllAccessListMembersForAccessListRequest) returns (google.protobuf.Empty);
     */
    deleteAllAccessListMembersForAccessList(input: DeleteAllAccessListMembersForAccessListRequest, options?: RpcOptions): UnaryCall<DeleteAllAccessListMembersForAccessListRequest, Empty> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteAllAccessListMembersForAccessListRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteAllAccessListMembers hard deletes all access list members for an
     * access list.
     *
     * @generated from protobuf rpc: DeleteAllAccessListMembers(teleport.accesslist.v1.DeleteAllAccessListMembersRequest) returns (google.protobuf.Empty);
     */
    deleteAllAccessListMembers(input: DeleteAllAccessListMembersRequest, options?: RpcOptions): UnaryCall<DeleteAllAccessListMembersRequest, Empty> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteAllAccessListMembersRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * UpsertAccessListWithMembers creates or updates an access list with members.
     *
     * @generated from protobuf rpc: UpsertAccessListWithMembers(teleport.accesslist.v1.UpsertAccessListWithMembersRequest) returns (teleport.accesslist.v1.UpsertAccessListWithMembersResponse);
     */
    upsertAccessListWithMembers(input: UpsertAccessListWithMembersRequest, options?: RpcOptions): UnaryCall<UpsertAccessListWithMembersRequest, UpsertAccessListWithMembersResponse> {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpsertAccessListWithMembersRequest, UpsertAccessListWithMembersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListAccessListReviews will list access list reviews for a particular access
     * list.
     *
     * @generated from protobuf rpc: ListAccessListReviews(teleport.accesslist.v1.ListAccessListReviewsRequest) returns (teleport.accesslist.v1.ListAccessListReviewsResponse);
     */
    listAccessListReviews(input: ListAccessListReviewsRequest, options?: RpcOptions): UnaryCall<ListAccessListReviewsRequest, ListAccessListReviewsResponse> {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListAccessListReviewsRequest, ListAccessListReviewsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListAllAccessListReviews will list access list reviews for all access
     * lists.
     *
     * @generated from protobuf rpc: ListAllAccessListReviews(teleport.accesslist.v1.ListAllAccessListReviewsRequest) returns (teleport.accesslist.v1.ListAllAccessListReviewsResponse);
     */
    listAllAccessListReviews(input: ListAllAccessListReviewsRequest, options?: RpcOptions): UnaryCall<ListAllAccessListReviewsRequest, ListAllAccessListReviewsResponse> {
        const method = this.methods[17], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListAllAccessListReviewsRequest, ListAllAccessListReviewsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * CreateAccessListReview will create a new review for an access list. It will
     * also modify the original access list and its members depending on the
     * details of the review.
     *
     * @generated from protobuf rpc: CreateAccessListReview(teleport.accesslist.v1.CreateAccessListReviewRequest) returns (teleport.accesslist.v1.CreateAccessListReviewResponse);
     */
    createAccessListReview(input: CreateAccessListReviewRequest, options?: RpcOptions): UnaryCall<CreateAccessListReviewRequest, CreateAccessListReviewResponse> {
        const method = this.methods[18], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateAccessListReviewRequest, CreateAccessListReviewResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteAccessListReview will delete an access list review from the backend.
     *
     * @generated from protobuf rpc: DeleteAccessListReview(teleport.accesslist.v1.DeleteAccessListReviewRequest) returns (google.protobuf.Empty);
     */
    deleteAccessListReview(input: DeleteAccessListReviewRequest, options?: RpcOptions): UnaryCall<DeleteAccessListReviewRequest, Empty> {
        const method = this.methods[19], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteAccessListReviewRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * AccessRequestPromote promotes an access request to an access list.
     *
     * @generated from protobuf rpc: AccessRequestPromote(teleport.accesslist.v1.AccessRequestPromoteRequest) returns (teleport.accesslist.v1.AccessRequestPromoteResponse);
     */
    accessRequestPromote(input: AccessRequestPromoteRequest, options?: RpcOptions): UnaryCall<AccessRequestPromoteRequest, AccessRequestPromoteResponse> {
        const method = this.methods[20], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccessRequestPromoteRequest, AccessRequestPromoteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetSuggestedAccessLists returns suggested access lists for an access
     * request.
     *
     * @generated from protobuf rpc: GetSuggestedAccessLists(teleport.accesslist.v1.GetSuggestedAccessListsRequest) returns (teleport.accesslist.v1.GetSuggestedAccessListsResponse);
     */
    getSuggestedAccessLists(input: GetSuggestedAccessListsRequest, options?: RpcOptions): UnaryCall<GetSuggestedAccessListsRequest, GetSuggestedAccessListsResponse> {
        const method = this.methods[21], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetSuggestedAccessListsRequest, GetSuggestedAccessListsResponse>("unary", this._transport, method, opt, input);
    }
}
