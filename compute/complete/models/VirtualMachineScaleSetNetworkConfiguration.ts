import { SubResource } from './SubResource';
import { VirtualMachineScaleSetNetworkConfigurationProperties } from './VirtualMachineScaleSetNetworkConfigurationProperties';

/**
 * @description Describes a virtual machine scale set network profile's network configurations.
 */
export interface VirtualMachineScaleSetNetworkConfiguration extends SubResource {
    /**
     * @description The network configuration name.
     */
    name?: string;
    properties: VirtualMachineScaleSetNetworkConfigurationProperties;
}
