import { MatchedRule } from './MatchedRule';
import { NetworkSecurityRulesEvaluationResult } from './NetworkSecurityRulesEvaluationResult';

/**
 * @description Results of network security group evaluation.
 * @since 2019-07-01
 */
export interface EvaluatedNetworkSecurityGroup {
    /**
     * @description Network security group ID.
     */
    networkSecurityGroupId: string;
    /**
     * @description Resource ID of nic or subnet to which network security group is applied.
     */
    appliedTo: string;
    /**
     * @description Matched network security rule.
     */
    matchedRule: MatchedRule;
    /**
     * @description List of network security rules evaluation results.
     */
    readonly rulesEvaluationResult: Array<NetworkSecurityRulesEvaluationResult>;
}
