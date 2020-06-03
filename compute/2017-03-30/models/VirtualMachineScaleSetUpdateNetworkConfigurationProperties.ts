import { SubResource } from './SubResource';
import { VirtualMachineScaleSetNetworkConfigurationDnsSettings } from './VirtualMachineScaleSetNetworkConfigurationDnsSettings';
import { VirtualMachineScaleSetUpdateIPConfiguration } from './VirtualMachineScaleSetUpdateIPConfiguration';
/**
 * @description Describes a virtual machine scale set updatable network profile's IP configuration.Use this object for updating network profile's IP Configuration.
 */
export interface VirtualMachineScaleSetUpdateNetworkConfigurationProperties {
    /**
     * @description Whether this is a primary NIC on a virtual machine.
     */
    primary: boolean;
    /**
     * @description Specifies whether the network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking: boolean;
    /**
     * @description The network security group.
     */
    networkSecurityGroup: SubResource;
    /**
     * @description The dns settings to be applied on the network interfaces.
     */
    dnsSettings: VirtualMachineScaleSetNetworkConfigurationDnsSettings;
    /**
     * @description The virtual machine scale set IP Configuration.
     */
    ipConfigurations: Array<VirtualMachineScaleSetUpdateIPConfiguration>;
}
