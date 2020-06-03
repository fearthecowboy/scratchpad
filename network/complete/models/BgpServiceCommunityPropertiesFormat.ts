import { BGPCommunity } from './BGPCommunity';

/**
 * @description Properties of Service Community.
 * @since 2017-11-01
 */
export interface BgpServiceCommunityPropertiesFormat {
    /**
     * @description The name of the bgp community. e.g. Skype.
     */
    serviceName: string;
    /**
     * @description Get a list of bgp communities.
     */
    bgpCommunities: Array<BGPCommunity>;
}
