import { ProximityPlacementGroup } from './ProximityPlacementGroup';
/**
 * @description The List Proximity Placement Group operation response.
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
