import { VirtualMachineScaleSetNetworkConfiguration } from './VirtualMachineScaleSetNetworkConfiguration';
/**
 * @description Describes a virtual machine scale set VM network profile.
 */
export interface VirtualMachineScaleSetVMNetworkProfileConfiguration {
    /**
     * @description The list of network configurations.
     */
    networkInterfaceConfigurations: Array<VirtualMachineScaleSetNetworkConfiguration>;
}
