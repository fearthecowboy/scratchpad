import { SubResource } from './SubResource';
import { NetworkSecurityGroup } from './NetworkSecurityGroup';
import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { NetworkInterfaceDnsSettings } from './NetworkInterfaceDnsSettings';
/**
 * @description NetworkInterface properties.
 */
export interface NetworkInterfacePropertiesFormat {
    /**
     * @description The reference of a virtual machine.
     */
    virtualMachine: SubResource;
    /**
     * @description The reference of the NetworkSecurityGroup resource.
     */
    networkSecurityGroup: NetworkSecurityGroup;
    /**
     * @description A list of IPConfigurations of the network interface.
     */
    ipConfigurations: Array<NetworkInterfaceIPConfiguration>;
    /**
     * @description The DNS settings in network interface.
     */
    dnsSettings: NetworkInterfaceDnsSettings;
    /**
     * @description The MAC address of the network interface.
     */
    macAddress: string;
    /**
     * @description Gets whether this is a primary network interface on a virtual machine.
     */
    primary: boolean;
    /**
     * @description If the network interface is accelerated networking enabled.
     */
    enableAcceleratedNetworking: boolean;
    /**
     * @description Indicates whether IP forwarding is enabled on this network interface.
     */
    enableIPForwarding: boolean;
    /**
     * @description The resource GUID property of the network interface resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
