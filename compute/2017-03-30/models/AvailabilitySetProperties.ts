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
     * @description The resource status information.
     */
    readonly statuses: Array<InstanceViewStatus>;
}
