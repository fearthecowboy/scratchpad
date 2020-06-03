import { ProximityPlacementGroup } from './ProximityPlacementGroup';

/**
 * @description The List Proximity Placement Group operation response.
 * @since 2018-06-01
 */
export interface ProximityPlacementGroupListResult {
    /**
     * @description The list of proximity placement groups
     */
    value?: Array<ProximityPlacementGroup>;
    /**
     * @description The URI to fetch the next page of proximity placement groups.
     */
    nextLink: string;
}
