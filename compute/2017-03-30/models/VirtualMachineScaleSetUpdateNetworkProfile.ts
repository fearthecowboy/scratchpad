import { VirtualMachineScaleSetUpdateNetworkConfiguration } from './VirtualMachineScaleSetUpdateNetworkConfiguration';
/**
 * @description Describes a virtual machine scale set network profile.
 */
export interface VirtualMachineScaleSetUpdateNetworkProfile {
    /**
     * @description The list of network configurations.
     */
    networkInterfaceConfigurations: Array<VirtualMachineScaleSetUpdateNetworkConfiguration>;
}
