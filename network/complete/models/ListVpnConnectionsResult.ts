import { VpnConnection } from './VpnConnection';

/**
 * @description Result of the request to list all vpn connections to a virtual wan vpn gateway. It contains a list of Vpn Connections and a URL nextLink to get the next set of results.
 * @since 2019-07-01
 */
export interface ListVpnConnectionsResult {
    /**
     * @description List of Vpn Connections.
     */
    value: Array<VpnConnection>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
