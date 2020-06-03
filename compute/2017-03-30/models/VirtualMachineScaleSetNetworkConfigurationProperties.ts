import { SubResource } from './SubResource';
import { VirtualMachineScaleSetNetworkConfigurationDnsSettings } from './VirtualMachineScaleSetNetworkConfigurationDnsSettings';
import { VirtualMachineScaleSetIPConfiguration } from './VirtualMachineScaleSetIPConfiguration';
/**
 * @description Describes a virtual machine scale set network profile's IP configuration.
 */
export interface VirtualMachineScaleSetNetworkConfigurationProperties {
    /**
     * @description Specifies the primary network interface in case the virtual machine has more than 1 network interface.
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
     * @description Specifies the IP configurations of the network interface.
     */
    ipConfigurations?: Array<VirtualMachineScaleSetIPConfiguration>;
}
