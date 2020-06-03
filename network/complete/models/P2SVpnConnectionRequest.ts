
/**
 * @description List of p2s vpn connections to be disconnected.
 * @since 2019-12-01
 */
export interface P2SVpnConnectionRequest {
    /**
     * @description List of p2s vpn connection Ids.
     */
    vpnConnectionIds: Array<string>;
}
