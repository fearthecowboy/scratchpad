import { Resource } from './Resource';
import { ProximityPlacementGroupProperties } from './ProximityPlacementGroupProperties';
/**
 * @description Specifies information about the proximity placement group.
 */
export interface ProximityPlacementGroup extends Resource {
    /**
     * @description Describes the properties of a Proximity Placement Group.
     */
    properties: ProximityPlacementGroupProperties;
}
