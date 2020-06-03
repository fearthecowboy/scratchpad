import { VpnClientConnectionHealthDetail } from './VpnClientConnectionHealthDetail';
/**
 * @description List of virtual network gateway vpn client connection health.
 */
export interface VpnClientConnectionHealthDetailListResult {
    /**
     * @description List of vpn client connection health.
     */
    value: Array<VpnClientConnectionHealthDetail>;
}
