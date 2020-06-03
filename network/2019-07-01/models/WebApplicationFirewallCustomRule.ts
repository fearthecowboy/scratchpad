import { WebApplicationFirewallRuleType } from '../enums/WebApplicationFirewallRuleType';
import { MatchCondition } from './MatchCondition';
import { WebApplicationFirewallAction } from '../enums/WebApplicationFirewallAction';
/**
 * @description Defines contents of a web application rule.
 */
export interface WebApplicationFirewallCustomRule {
    /**
     * @description The name of the resource that is unique within a policy. This name can be used to access the resource.
     */
    name: string & MaxLength<128>;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
     */
    priority?: int64;
    /**
     * @description Describes type of rule.
     */
    ruleType?: WebApplicationFirewallRuleType | string;
    /**
     * @description List of match conditions.
     */
    matchConditions?: Array<MatchCondition>;
    /**
     * @description Type of Actions.
     */
    action?: WebApplicationFirewallAction | string;
}
