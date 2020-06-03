import { SubResource } from './SubResource';
import { VirtualMachineScaleSetUpdateIPConfigurationProperties } from './VirtualMachineScaleSetUpdateIPConfigurationProperties';
/**
 * @description Describes a virtual machine scale set network profile's IP configuration. NOTE: The subnet of a scale set may be modified as long as the original subnet and the new subnet are in the same virtual network
 */
export interface VirtualMachineScaleSetUpdateIPConfiguration extends SubResource {
    /**
     * @description The IP configuration name.
     */
    name: string;
    properties: VirtualMachineScaleSetUpdateIPConfigurationProperties;
}
