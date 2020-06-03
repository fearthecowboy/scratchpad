import { LoadBalancerBackendAddressPropertiesFormat } from './LoadBalancerBackendAddressPropertiesFormat';
/**
 * @description Load balancer backend addresses.
 * @since 2020-04-01
 */
export interface LoadBalancerBackendAddress {
    /**
     * @description Properties of load balancer backend address pool.
     */
    properties: LoadBalancerBackendAddressPropertiesFormat;
    /**
     * @description Name of the backend address.
     */
    name: string;
}
