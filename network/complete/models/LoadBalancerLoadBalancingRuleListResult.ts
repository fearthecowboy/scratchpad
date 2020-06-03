import { LoadBalancingRule } from './LoadBalancingRule';

/**
 * @description Response for ListLoadBalancingRule API service call.
 * @since 2017-11-01
 */
export interface LoadBalancerLoadBalancingRuleListResult {
    /**
     * @description A list of load balancing rules in a load balancer.
     */
    value: Array<LoadBalancingRule>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
