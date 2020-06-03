import { DedicatedHostGroup } from './DedicatedHostGroup';
/**
 * @description The List Dedicated Host Group with resource group response.
 * @since 2019-12-01
 */
export interface DedicatedHostGroupListResult {
    /**
     * @description The list of dedicated host groups
     */
    value?: Array<DedicatedHostGroup>;
    /**
     * @description The URI to fetch the next page of Dedicated Host Groups. Call ListNext() with this URI to fetch the next page of Dedicated Host Groups.
     */
    nextLink: string;
}
