import { SubResource } from './SubResource';
import { InstanceViewStatus } from './InstanceViewStatus';
/**
 * @description The instance view of a resource.
 */
export interface AvailabilitySetProperties {
    /**
     * @description Update Domain count.
     */
    platformUpdateDomainCount: int32;
    /**
     * @description Fault Domain count.
     */
    platformFaultDomainCount: int32;
    /**
     * @description A list of references to all virtual machines in the availability set.
     */
    virtualMachines: Array<SubResource>;
    /**
     * @description Specifies information about the proximity placement group that the availability set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     */
    proximityPlacementGroup: SubResource;
    /**
     * @description The resource status information.
     */
    readonly statuses: Array<InstanceViewStatus>;
}
