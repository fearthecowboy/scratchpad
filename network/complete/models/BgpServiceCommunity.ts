import { BgpServiceCommunityPropertiesFormat } from './BgpServiceCommunityPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description Service Community Properties.
 * @since 2017-11-01
 */
export interface BgpServiceCommunity extends Resource {
    properties: BgpServiceCommunityPropertiesFormat;
}
