import { ApiEntityReference } from './ApiEntityReference';
import { VirtualMachineScaleSetUpdatePublicIPAddressConfiguration } from './VirtualMachineScaleSetUpdatePublicIPAddressConfiguration';
import { IPVersion } from '../enums/IPVersion';
import { SubResource } from './SubResource';
/**
 * @description Describes a virtual machine scale set network profile's IP configuration properties. NOTE: The subnet of a scale set may be modified as long as the original subnet and the new subnet are in the same virtual network.
 */
export interface VirtualMachineScaleSetUpdateIPConfigurationProperties {
    /**
     * @description The subnet.
     */
    subnet: ApiEntityReference;
    /**
     * @description Specifies the primary IP Configuration in case the network interface has more than one IP Configuration.
     */
    primary: boolean;
    /**
     * @description The publicIPAddressConfiguration.
     */
    publicIPAddressConfiguration: VirtualMachineScaleSetUpdatePublicIPAddressConfiguration;
    /**
     * @description Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     */
    privateIPAddressVersion: IPVersion | string;
    /**
     * @description The application gateway backend address pools.
     */
    applicationGatewayBackendAddressPools: Array<SubResource>;
    /**
     * @description The load balancer backend address pools.
     */
    loadBalancerBackendAddressPools: Array<SubResource>;
    /**
     * @description The load balancer inbound nat pools.
     */
    loadBalancerInboundNatPools: Array<SubResource>;
}
