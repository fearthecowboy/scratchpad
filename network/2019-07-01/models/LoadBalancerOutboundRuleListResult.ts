import { OutboundRule } from './OutboundRule';
/**
 * @description Response for ListOutboundRule API service call.
 */
export interface LoadBalancerOutboundRuleListResult {
    /**
     * @description A list of outbound rules in a load balancer.
     */
    value: Array<OutboundRule>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
