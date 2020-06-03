import { SubResource } from "./SubResource";
import { VirtualMachineScaleSetIPConfiguration } from './VirtualMachineScaleSetIPConfiguration';
import { VirtualMachineScaleSetNetworkConfigurationDnsSettings } from "./VirtualMachineScaleSetNetworkConfigurationDnsSettings";

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
    /** @description Specifies whether the network interface is accelerated networking-enabled.
     * @since 2017-03-30
     */
    enableAcceleratedNetworking: boolean;
    /** @description The network security group.
     * @since 2017-03-30
     */
    networkSecurityGroup: SubResource;
    /** @description The dns settings to be applied on the network interfaces.
     * @since 2017-03-30
     */
    dnsSettings: VirtualMachineScaleSetNetworkConfigurationDnsSettings;
    /** @description Whether IP forwarding enabled on this NIC.
     * @since 2018-06-01
     */
    enableIPForwarding: boolean;
}
