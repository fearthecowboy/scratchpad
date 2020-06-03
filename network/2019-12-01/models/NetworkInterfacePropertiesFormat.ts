import { SubResource } from './SubResource';
import { NetworkSecurityGroup } from './NetworkSecurityGroup';
import { PrivateEndpoint } from './PrivateEndpoint';
import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { NetworkInterfaceTapConfiguration } from './NetworkInterfaceTapConfiguration';
import { NetworkInterfaceDnsSettings } from './NetworkInterfaceDnsSettings';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description NetworkInterface properties.
 */
export interface NetworkInterfacePropertiesFormat {
    /**
     * @description The reference to a virtual machine.
     */
    readonly virtualMachine: SubResource;
    /**
     * @description The reference to the NetworkSecurityGroup resource.
     */
    networkSecurityGroup: NetworkSecurityGroup;
    /**
     * @description A reference to the private endpoint to which the network interface is linked.
     */
    readonly privateEndpoint: PrivateEndpoint;
    /**
     * @description A list of IPConfigurations of the network interface.
     */
    ipConfigurations: Array<NetworkInterfaceIPConfiguration>;
    /**
     * @description A list of TapConfigurations of the network interface.
     */
    readonly tapConfigurations: Array<NetworkInterfaceTapConfiguration>;
    /**
     * @description The DNS settings in network interface.
     */
    dnsSettings: NetworkInterfaceDnsSettings;
    /**
     * @description The MAC address of the network interface.
     */
    readonly macAddress: string ;
    /**
     * @description Whether this is a primary network interface on a virtual machine.
     */
    readonly primary: boolean ;
    /**
     * @description If the network interface is accelerated networking enabled.
     */
    enableAcceleratedNetworking: boolean;
    /**
     * @description Indicates whether IP forwarding is enabled on this network interface.
     */
    enableIPForwarding: boolean;
    /**
     * @description A list of references to linked BareMetal resources.
     */
    readonly hostedWorkloads: Array<string>;
    /**
     * @description The resource GUID property of the network interface resource.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the network interface resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
