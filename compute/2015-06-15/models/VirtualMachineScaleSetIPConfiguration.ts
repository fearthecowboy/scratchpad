import { SubResource } from './SubResource';
import { VirtualMachineScaleSetIPConfigurationProperties } from './VirtualMachineScaleSetIPConfigurationProperties';
/**
 * @description Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetIPConfiguration extends SubResource {
    /**
     * @description The IP configuration name.
     */
    name?: string;
    properties: VirtualMachineScaleSetIPConfigurationProperties;
}
