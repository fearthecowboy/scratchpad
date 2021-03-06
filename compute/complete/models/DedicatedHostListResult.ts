import { DedicatedHost } from './DedicatedHost';
/**
 * @description The list dedicated host operation response.
 * @since 2019-12-01
 */
export interface DedicatedHostListResult {
    /**
     * @description The list of dedicated hosts
     */
    value?: Array<DedicatedHost>;
    /**
     * @description The URI to fetch the next page of dedicated hosts. Call ListNext() with this URI to fetch the next page of dedicated hosts.
     */
    nextLink: string;
}
