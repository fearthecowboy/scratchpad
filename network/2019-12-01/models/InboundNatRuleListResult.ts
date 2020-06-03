import { InboundNatRule } from './InboundNatRule';
/**
 * @description Response for ListInboundNatRule API service call.
 */
export interface InboundNatRuleListResult {
    /**
     * @description A list of inbound nat rules in a load balancer.
     */
    value: Array<InboundNatRule>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
