import { VpnSiteLinkConnection } from './VpnSiteLinkConnection';
/**
 * @description Result of the request to list all vpn connections to a virtual wan vpn gateway. It contains a list of Vpn Connections and a URL nextLink to get the next set of results.
 */
export interface ListVpnSiteLinkConnectionsResult {
    /**
     * @description List of VpnSiteLinkConnections.
     */
    value: Array<VpnSiteLinkConnection>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
