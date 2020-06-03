import { SubResource } from './SubResource';
import { VirtualMachineScaleSetUpdateIPConfigurationProperties } from './VirtualMachineScaleSetUpdateIPConfigurationProperties';
/**
 * @description Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetUpdateIPConfiguration extends SubResource {
    /**
     * @description The IP configuration name.
     */
    name: string;
    properties: VirtualMachineScaleSetUpdateIPConfigurationProperties;
}
