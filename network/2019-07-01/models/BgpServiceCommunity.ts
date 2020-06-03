import { Resource } from './Resource';
import { BgpServiceCommunityPropertiesFormat } from './BgpServiceCommunityPropertiesFormat';
/**
 * @description Service Community Properties.
 */
export interface BgpServiceCommunity extends Resource {
    /**
     * @description Properties of the BGP service community.
     */
    properties: BgpServiceCommunityPropertiesFormat;
}
