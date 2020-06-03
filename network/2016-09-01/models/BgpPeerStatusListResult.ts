import { BgpPeerStatus } from './BgpPeerStatus';
/**
 * @description Response for list BGP peer status API service call
 */
export interface BgpPeerStatusListResult {
    /**
     * @description List of BGP peers
     */
    value: Array<BgpPeerStatus>;
}
