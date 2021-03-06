import { BgpServiceCommunity } from './BgpServiceCommunity';
/**
 * @description Response for the ListServiceCommunity API service call.
 */
export interface BgpServiceCommunityListResult {
    /**
     * @description A list of service community resources.
     */
    value: Array<BgpServiceCommunity>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
