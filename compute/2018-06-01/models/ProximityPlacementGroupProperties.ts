import { ProximityPlacementGroupType } from '../enums/ProximityPlacementGroupType';
import { SubResource } from './SubResource';
/**
 * @description Describes the properties of a Proximity Placement Group.
 */
export interface ProximityPlacementGroupProperties {
    /**
     * @description Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
     */
    proximityPlacementGroupType: ProximityPlacementGroupType | string;
    /**
     * @description A list of references to all virtual machines in the proximity placement group.
     */
    readonly virtualMachines: Array<SubResource>;
    /**
     * @description A list of references to all virtual machine scale sets in the proximity placement group.
     */
    readonly virtualMachineScaleSets: Array<SubResource>;
    /**
     * @description A list of references to all availability sets in the proximity placement group.
     */
    readonly availabilitySets: Array<SubResource>;
}
