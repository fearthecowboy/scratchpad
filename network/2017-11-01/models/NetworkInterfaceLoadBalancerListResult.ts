import { LoadBalancer } from './LoadBalancer';
/**
 * @description Response for list ip configurations API service call.
 */
export interface NetworkInterfaceLoadBalancerListResult {
    /**
     * @description A list of load balancers.
     */
    value: Array<LoadBalancer>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
