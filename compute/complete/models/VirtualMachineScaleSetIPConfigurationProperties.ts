import { IPVersion } from "../enums/IPVersion";
import { ApiEntityReference } from './ApiEntityReference';
import { SubResource } from './SubResource';
import { VirtualMachineScaleSetPublicIPAddressConfiguration } from "./VirtualMachineScaleSetPublicIPAddressConfiguration";

/**
 * @description Describes a virtual machine scale set network profile's IP configuration properties.
 */
export interface VirtualMachineScaleSetIPConfigurationProperties {
    /**
     * @description The subnet.
     * @Optional  '2017-03-30' - made property required
     */
    subnet: ApiEntityReference;
    /**
     * @description The load balancer backend address pools.
     */
    loadBalancerBackendAddressPools: Array<SubResource>;
    /**
     * @description The load balancer inbound nat pools.
     */
    loadBalancerInboundNatPools: Array<SubResource>;
    /** @description The application gateway backend address pools.
     * @since 2016-03-30
     */
    applicationGatewayBackendAddressPools: Array<SubResource>;
    /** @description Specifies the primary network interface in case the virtual machine has more than 1 network interface.
     * @since 2017-03-30
     */
    primary: boolean;
    /** @description The publicIPAddressConfiguration.
     * @since 2017-03-30
     */
    publicIPAddressConfiguration: VirtualMachineScaleSetPublicIPAddressConfiguration;
    /** @description Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
     * @since 2017-03-30
     */
    privateIPAddressVersion: IPVersion | string;
    /** @description Specifies an array of references to application security group.
     * @since 2019-12-01
     */
    applicationSecurityGroups: Array<SubResource>;
}
