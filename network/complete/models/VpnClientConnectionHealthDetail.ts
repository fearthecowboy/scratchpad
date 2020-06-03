
/**
 * @description VPN client connection health detail.
 * @since 2019-07-01
 */
export interface VpnClientConnectionHealthDetail {
    /**
     * @description The vpn client Id.
     */
    readonly vpnConnectionId: string ;
    /**
     * @description The duration time of a connected vpn client.
     */
    readonly vpnConnectionDuration: int64;
    /**
     * @description The start time of a connected vpn client.
     */
    readonly vpnConnectionTime: string ;
    /**
     * @description The public Ip of a connected vpn client.
     */
    readonly publicIpAddress: string ;
    /**
     * @description The assigned private Ip of a connected vpn client.
     */
    readonly privateIpAddress: string ;
    /**
     * @description The user name of a connected vpn client.
     */
    readonly vpnUserName: string ;
    /**
     * @description The max band width.
     */
    readonly maxBandwidth: int64;
    /**
     * @description The egress packets per second.
     */
    readonly egressPacketsTransferred: int64;
    /**
     * @description The egress bytes per second.
     */
    readonly egressBytesTransferred: int64;
    /**
     * @description The ingress packets per second.
     */
    readonly ingressPacketsTransferred: int64;
    /**
     * @description The ingress bytes per second.
     */
    readonly ingressBytesTransferred: int64;
    /**
     * @description The max packets transferred per second.
     */
    readonly maxPacketsPerSecond: int64;
}
