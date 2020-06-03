import { BackendAddressPool } from './BackendAddressPool';
/**
 * @description Response for ListBackendAddressPool API service call.
 */
export interface LoadBalancerBackendAddressPoolListResult {
    /**
     * @description A list of backend address pools in a load balancer.
     */
    value: Array<BackendAddressPool>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
