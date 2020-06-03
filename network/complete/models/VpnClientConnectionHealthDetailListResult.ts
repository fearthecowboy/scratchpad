import { VpnClientConnectionHealthDetail } from './VpnClientConnectionHealthDetail';

/**
 * @description List of virtual network gateway vpn client connection health.
 * @since 2019-07-01
 */
export interface VpnClientConnectionHealthDetailListResult {
    /**
     * @description List of vpn client connection health.
     */
    value: Array<VpnClientConnectionHealthDetail>;
}
