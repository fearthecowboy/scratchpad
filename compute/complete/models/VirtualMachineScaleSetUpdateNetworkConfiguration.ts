import { SubResource } from './SubResource';
import { VirtualMachineScaleSetUpdateNetworkConfigurationProperties } from './VirtualMachineScaleSetUpdateNetworkConfigurationProperties';

/**
 * @description Describes a virtual machine scale set network profile's network configurations.
 * @since 2017-03-30
 */
export interface VirtualMachineScaleSetUpdateNetworkConfiguration extends SubResource {
    /**
     * @description The network configuration name.
     */
    name: string;
    properties: VirtualMachineScaleSetUpdateNetworkConfigurationProperties;
}
