
/**
 * @extensible
 * @description VPN client protocol enabled for the virtual network gateway.
 * @since 2017-11-01
 */
export enum VpnClientProtocol {
    /**
     *
     */
    IkeV2 = 'IkeV2',
    /**
     *
     */
    SSTP = 'SSTP',
    /**
     * @since 2019-07-01
     */
    OpenVPN = "OpenVPN"
}
