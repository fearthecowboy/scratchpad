import { ProximityPlacementGroupType } from '../enums/ProximityPlacementGroupType';
import { InstanceViewStatus } from "./InstanceViewStatus";
import { SubResourceWithColocationStatus } from "./SubResourceWithColocationStatus";

/**
 * @description Describes the properties of a Proximity Placement Group.
 * @since 2018-06-01
 */
export interface ProximityPlacementGroupProperties {
    /**
     * @description Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
     */
    proximityPlacementGroupType: ProximityPlacementGroupType | string;
    /**
     * @description A list of references to all virtual machines in the proximity placement group.
     * @Type  '2019-12-01' - type changed from 'Array<SubResource>' to 'Array<SubResourceWithColocationStatus>'
     */
    readonly virtualMachines: Array<SubResourceWithColocationStatus>;
    /**
     * @description A list of references to all virtual machine scale sets in the proximity placement group.
     * @Type  '2019-12-01' - type changed from 'Array<SubResource>' to 'Array<SubResourceWithColocationStatus>'
     */
    readonly virtualMachineScaleSets: Array<SubResourceWithColocationStatus>;
    /**
     * @description A list of references to all availability sets in the proximity placement group.
     * @Type  '2019-12-01' - type changed from 'Array<SubResource>' to 'Array<SubResourceWithColocationStatus>'
     */
    readonly availabilitySets: Array<SubResourceWithColocationStatus>;
    /** @description Describes colocation status of the Proximity Placement Group.
     * @since 2019-12-01
     */
    colocationStatus: InstanceViewStatus;
}
