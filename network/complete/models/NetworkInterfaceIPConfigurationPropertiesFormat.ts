import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { IPVersion } from '../enums/IPVersion';
import { ProvisioningState } from "../enums/ProvisioningState";
import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { ApplicationSecurityGroup } from "./ApplicationSecurityGroup";
import { BackendAddressPool } from './BackendAddressPool';
import { InboundNatRule } from './InboundNatRule';
import { NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties } from "./NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties";
import { PublicIPAddress } from './PublicIPAddress';
import { Subnet } from './Subnet';
import { VirtualNetworkTap } from "./VirtualNetworkTap";

/**
 * @description Properties of IP configuration.
 */
export interface NetworkInterfaceIPConfigurationPropertiesFormat {
    /**
     * @description The reference of ApplicationGatewayBackendAddressPool resource.
     */
    applicationGatewayBackendAddressPools: Array<ApplicationGatewayBackendAddressPool>;
    /**
     * @description The reference of LoadBalancerBackendAddressPool resource.
     */
    loadBalancerBackendAddressPools: Array<BackendAddressPool>;
    /**
     * @description A list of references of LoadBalancerInboundNatRules.
     */
    loadBalancerInboundNatRules: Array<InboundNatRule>;
    privateIPAddress: string;
    /**
     * @description Defines how a private IP address is assigned. Possible values are: 'Static' and 'Dynamic'.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     */
    privateIPAddressVersion: IPVersion | string;
    subnet: Subnet;
    /**
     * @description Gets whether this is a primary customer address on the network interface.
     */
    primary: boolean;
    publicIPAddress: PublicIPAddress;
    /**
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Application security groups in which the IP configuration is included.
     * @since 2017-11-01
     */
    applicationSecurityGroups: Array<ApplicationSecurityGroup>;
    /** @description The reference to Virtual Network Taps.
     * @since 2019-07-01
     */
    virtualNetworkTaps: Array<VirtualNetworkTap>;
    /** @description PrivateLinkConnection properties for the network interface.
     * @since 2019-07-01
     */
    readonly privateLinkConnectionProperties: NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties;
}
