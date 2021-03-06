import { IpGroup } from './IpGroup';

/**
 * @description Response for the ListIpGroups API service call.
 * @since 2019-12-01
 */
export interface IpGroupListResult {
    /**
     * @description The list of IpGroups information resources.
     */
    value: Array<IpGroup>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
