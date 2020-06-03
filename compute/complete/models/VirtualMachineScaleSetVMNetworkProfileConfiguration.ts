import { VirtualMachineScaleSetNetworkConfiguration } from './VirtualMachineScaleSetNetworkConfiguration';
/**
 * @description Describes a virtual machine scale set VM network profile.
 * @since 2019-12-01
 */
export interface VirtualMachineScaleSetVMNetworkProfileConfiguration {
    /**
     * @description The list of network configurations.
     */
    networkInterfaceConfigurations: Array<VirtualMachineScaleSetNetworkConfiguration>;
}
