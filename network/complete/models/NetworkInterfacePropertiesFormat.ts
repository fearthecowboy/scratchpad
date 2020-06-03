import { ProvisioningState } from "../enums/ProvisioningState";
import { NetworkInterfaceDnsSettings } from './NetworkInterfaceDnsSettings';
import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { NetworkInterfaceTapConfiguration } from "./NetworkInterfaceTapConfiguration";
import { NetworkSecurityGroup } from './NetworkSecurityGroup';
import { PrivateEndpoint } from "./PrivateEndpoint";
import { SubResource } from './SubResource';

/**
 * @description NetworkInterface properties.
 */
export interface NetworkInterfacePropertiesFormat {
    /**
     * @description The reference of a virtual machine.
     * @Readonly  '2019-07-01' - added readonly
     */
    readonly virtualMachine: SubResource;
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly macAddress: string;
    /**
     * @description Gets whether this is a primary network interface on a virtual machine.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly primary: boolean;
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description A reference to the private endpoint to which the network interface is linked.
     * @since 2019-07-01
     */
    readonly privateEndpoint: PrivateEndpoint;
    /** @description A list of TapConfigurations of the network interface.
     * @since 2019-07-01
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly tapConfigurations: Array<NetworkInterfaceTapConfiguration>;
    /** @description A list of references to linked BareMetal resources.
     * @since 2019-07-01
     */
    readonly hostedWorkloads: Array<string>;
}
