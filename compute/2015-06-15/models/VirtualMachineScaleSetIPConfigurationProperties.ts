import { ApiEntityReference } from './ApiEntityReference';
import { SubResource } from './SubResource';
/**
 * @description Describes a virtual machine scale set network profile's IP configuration properties.
 */
export interface VirtualMachineScaleSetIPConfigurationProperties {
    /**
     * @description The subnet.
     */
    subnet?: ApiEntityReference;
    /**
     * @description The load balancer backend address pools.
     */
    loadBalancerBackendAddressPools: Array<SubResource>;
    /**
     * @description The load balancer inbound nat pools.
     */
    loadBalancerInboundNatPools: Array<SubResource>;
}
