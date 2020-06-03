import { VirtualNetworkTap } from './VirtualNetworkTap';
import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { BackendAddressPool } from './BackendAddressPool';
import { InboundNatRule } from './InboundNatRule';
import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { IPVersion } from '../enums/IPVersion';
import { Subnet } from './Subnet';
import { PublicIPAddress } from './PublicIPAddress';
import { ApplicationSecurityGroup } from './ApplicationSecurityGroup';
import { ProvisioningState } from '../enums/ProvisioningState';
import { NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties } from './NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties';
/**
 * @description Properties of IP configuration.
 */
export interface NetworkInterfaceIPConfigurationPropertiesFormat {
    /**
     * @description The reference to Virtual Network Taps.
     */
    virtualNetworkTaps: Array<VirtualNetworkTap>;
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
    /**
     * @description Private IP address of the IP configuration.
     */
    privateIPAddress: string;
    /**
     * @description The private IP address allocation method.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
     */
    privateIPAddressVersion: IPVersion | string;
    /**
     * @description Subnet bound to the IP configuration.
     */
    subnet: Subnet;
    /**
     * @description Whether this is a primary customer address on the network interface.
     */
    primary: boolean;
    /**
     * @description Public IP address bound to the IP configuration.
     */
    publicIPAddress: PublicIPAddress;
    /**
     * @description Application security groups in which the IP configuration is included.
     */
    applicationSecurityGroups: Array<ApplicationSecurityGroup>;
    /**
     * @description The provisioning state of the network interface IP configuration.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description PrivateLinkConnection properties for the network interface.
     */
    readonly privateLinkConnectionProperties: NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties;
}
