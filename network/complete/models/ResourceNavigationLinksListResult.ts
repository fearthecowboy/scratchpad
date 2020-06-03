import { ResourceNavigationLink } from './ResourceNavigationLink';

/**
 * @description Response for ResourceNavigationLinks_List operation.
 * @since 2019-07-01
 */
export interface ResourceNavigationLinksListResult {
    /**
     * @description The resource navigation links in a subnet.
     */
    value: Array<ResourceNavigationLink>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
