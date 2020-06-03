import { VirtualMachineScaleSetNetworkConfiguration } from './VirtualMachineScaleSetNetworkConfiguration';
/**
 * @description Describes a virtual machine scale set network profile.
 */
export interface VirtualMachineScaleSetNetworkProfile {
    /**
     * @description The list of network configurations.
     */
    networkInterfaceConfigurations: Array<VirtualMachineScaleSetNetworkConfiguration>;
}
