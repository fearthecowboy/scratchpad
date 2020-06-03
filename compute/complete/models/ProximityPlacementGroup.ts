import { ProximityPlacementGroupProperties } from './ProximityPlacementGroupProperties';
import { Resource } from './Resource';

/**
 * @description Specifies information about the proximity placement group.
 * @since 2018-06-01
 */
export interface ProximityPlacementGroup extends Resource {
    /**
     * @description Describes the properties of a Proximity Placement Group.
     */
    properties: ProximityPlacementGroupProperties;
}
