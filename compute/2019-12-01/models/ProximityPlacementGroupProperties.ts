import { ProximityPlacementGroupType } from '../enums/ProximityPlacementGroupType';
import { SubResourceWithColocationStatus } from './SubResourceWithColocationStatus';
import { InstanceViewStatus } from './InstanceViewStatus';
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
    readonly virtualMachines: Array<SubResourceWithColocationStatus>;
    /**
     * @description A list of references to all virtual machine scale sets in the proximity placement group.
     */
    readonly virtualMachineScaleSets: Array<SubResourceWithColocationStatus>;
    /**
     * @description A list of references to all availability sets in the proximity placement group.
     */
    readonly availabilitySets: Array<SubResourceWithColocationStatus>;
    /**
     * @description Describes colocation status of the Proximity Placement Group.
     */
    colocationStatus: InstanceViewStatus;
}
