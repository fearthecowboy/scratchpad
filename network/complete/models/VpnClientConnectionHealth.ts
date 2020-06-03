
/**
 * @description VpnClientConnectionHealth properties.
 * @since 2019-07-01
 */
export interface VpnClientConnectionHealth {
    /**
     * @description Total of the Ingress Bytes Transferred in this P2S Vpn connection.
     */
    readonly totalIngressBytesTransferred: int64;
    /**
     * @description Total of the Egress Bytes Transferred in this connection.
     */
    readonly totalEgressBytesTransferred: int64;
    /**
     * @description The total of p2s vpn clients connected at this time to this P2SVpnGateway.
     */
    vpnClientConnectionsCount: int32;
    /**
     * @description List of allocated ip addresses to the connected p2s vpn clients.
     */
    allocatedIpAddresses: Array<string>;
}
