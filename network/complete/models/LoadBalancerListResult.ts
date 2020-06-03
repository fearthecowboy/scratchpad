import { LoadBalancer } from './LoadBalancer';

/**
 * @description Response for ListLoadBalancers API service call.
 */
export interface LoadBalancerListResult {
    /**
     * @description A list of load balancers in a resource group.
     */
    value: Array<LoadBalancer>;
    /**
     * @description The URL to get the next set of results.
     * @Readonly  '2017-11-01' - added readonly
     */
    readonly nextLink: string;
}
