import React, { useCallback, useContext, useEffect, useState } from 'react';

import { useTeleport } from 'teleport';
import { usePoll } from 'teleport/Discover/Shared/usePoll';
import { INTERNAL_RESOURCE_ID_LABEL_KEY } from 'teleport/services/joinToken';
import { ResourceKind } from 'teleport/Discover/Shared/ResourceKind';
import { useJoinToken } from 'teleport/Discover/Shared/useJoinToken';

interface PingTeleportContextState<T> {
  active: boolean;
  start: () => void;
  setAlternateSearchTerm: (resourceName: string) => void;
  result: T | null;
}

const pingTeleportContext =
  React.createContext<PingTeleportContextState<any>>(null);

export function PingTeleportProvider<T>(props: {
  interval?: number;
  children?: React.ReactNode;
  resourceKind: ResourceKind;
}) {
  const ctx = useTeleport();

  const [active, setActive] = useState(false);

  // alternateSearchTerm when set will be used as the search term
  // instead of the default search term which is the internal resource ID.
  // Only applies to certain resource's eg: looking up database server
  // that proxies a database that goes by this alternateSearchTerm (eg. resourceName).
  const [alternateSearchTerm, setAlternateSearchTerm] = useState('');

  const { joinToken } = useJoinToken(props.resourceKind);

  const result = usePoll<T>(
    signal =>
      servicesFetchFn(signal).then(res => {
        if (res.agents.length) {
          return res.agents[0];
        }

        return null;
      }),
    active,
    props.interval
  );

  function servicesFetchFn(signal: AbortSignal) {
    const clusterId = ctx.storeUser.getClusterId();
    let search = `${INTERNAL_RESOURCE_ID_LABEL_KEY} ${joinToken.internalResourceId}`;
    if (alternateSearchTerm) {
      search = alternateSearchTerm;
    }
    const request = {
      search,
      limit: 1,
    };
    switch (props.resourceKind) {
      case ResourceKind.Server:
        return ctx.nodeService.fetchNodes(clusterId, request, signal);
      case ResourceKind.Desktop:
        return ctx.desktopService.fetchDesktopServices(
          clusterId,
          request,
          signal
        );
      case ResourceKind.Kubernetes:
        return ctx.kubeService.fetchKubernetes(clusterId, request, signal);
      case ResourceKind.Database:
        return ctx.databaseService.fetchDatabases(clusterId, request, signal);
      // TODO (when we start implementing them)
      // the fetch XXX needs a param defined for abort signal
      // case 'app':
    }
  }

  const start = useCallback(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    if (result) {
      setActive(false);
    }
  }, [result]);

  return (
    <pingTeleportContext.Provider
      value={{
        active,
        start,
        result,
        setAlternateSearchTerm,
      }}
    >
      {props.children}
    </pingTeleportContext.Provider>
  );
}

export function usePingTeleport<T>(alternateSearchTerm?: string) {
  const ctx = useContext<PingTeleportContextState<T>>(pingTeleportContext);

  useEffect(() => {
    if (!ctx.active) {
      ctx.start();
      ctx.setAlternateSearchTerm(alternateSearchTerm);
    }
  }, []);

  return ctx;
}
