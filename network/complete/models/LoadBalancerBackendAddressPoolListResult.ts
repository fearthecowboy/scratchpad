import { BackendAddressPool } from './BackendAddressPool';

/**
 * @description Response for ListBackendAddressPool API service call.
 * @since 2017-11-01
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
