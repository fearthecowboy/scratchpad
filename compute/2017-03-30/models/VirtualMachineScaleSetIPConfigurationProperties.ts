import { ApiEntityReference } from './ApiEntityReference';
import { VirtualMachineScaleSetPublicIPAddressConfiguration } from './VirtualMachineScaleSetPublicIPAddressConfiguration';
import { IPVersion } from '../enums/IPVersion';
import { SubResource } from './SubResource';
/**
 * @description Describes a virtual machine scale set network profile's IP configuration properties.
 */
export interface VirtualMachineScaleSetIPConfigurationProperties {
    /**
     * @description Specifies the identifier of the subnet.
     */
    subnet: ApiEntityReference;
    /**
     * @description Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     */
    primary: boolean;
    /**
     * @description The publicIPAddressConfiguration.
     */
    publicIPAddressConfiguration: VirtualMachineScaleSetPublicIPAddressConfiguration;
    /**
     * @description Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     */
    privateIPAddressVersion: IPVersion | string;
    /**
     * @description Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools: Array<SubResource>;
    /**
     * @description Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
     */
    loadBalancerBackendAddressPools: Array<SubResource>;
    /**
     * @description Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer
     */
    loadBalancerInboundNatPools: Array<SubResource>;
}
