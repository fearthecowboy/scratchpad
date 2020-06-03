import { Resource } from './Resource';
import { BgpServiceCommunityPropertiesFormat } from './BgpServiceCommunityPropertiesFormat';
/**
 * @description Service Community Properties.
 */
export interface BgpServiceCommunity extends Resource {
    properties: BgpServiceCommunityPropertiesFormat;
}
