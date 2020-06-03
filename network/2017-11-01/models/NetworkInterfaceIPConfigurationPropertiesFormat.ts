import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { BackendAddressPool } from './BackendAddressPool';
import { InboundNatRule } from './InboundNatRule';
import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { IPVersion } from '../enums/IPVersion';
import { Subnet } from './Subnet';
import { PublicIPAddress } from './PublicIPAddress';
import { ApplicationSecurityGroup } from './ApplicationSecurityGroup';
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
    /**
     * @description Private IP address of the IP configuration.
     */
    privateIPAddress: string;
    /**
     * @description Defines how a private IP address is assigned. Possible values are: 'Static' and 'Dynamic'.
     */
    privateIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     */
    privateIPAddressVersion: IPVersion | string;
    /**
     * @description Subnet bound to the IP configuration.
     */
    subnet: Subnet;
    /**
     * @description Gets whether this is a primary customer address on the network interface.
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
     * @description The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
