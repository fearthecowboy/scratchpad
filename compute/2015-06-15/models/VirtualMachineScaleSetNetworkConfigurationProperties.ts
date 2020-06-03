import { VirtualMachineScaleSetIPConfiguration } from './VirtualMachineScaleSetIPConfiguration';
/**
 * @description Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetNetworkConfigurationProperties {
    /**
     * @description Whether this is a primary NIC on a virtual machine.
     */
    primary: boolean;
    /**
     * @description The virtual machine scale set IP Configuration.
     */
    ipConfigurations?: Array<VirtualMachineScaleSetIPConfiguration>;
}
