import { SecurityRuleAccess } from '../enums/SecurityRuleAccess';
import { EvaluatedNetworkSecurityGroup } from './EvaluatedNetworkSecurityGroup';

/**
 * @description Network configuration diagnostic result corresponded provided traffic query.
 * @since 2019-07-01
 */
export interface NetworkSecurityGroupResult {
    /**
     * @description The network traffic is allowed or denied.
     */
    securityRuleAccessResult: SecurityRuleAccess | string;
    /**
     * @description List of results network security groups diagnostic.
     */
    readonly evaluatedNetworkSecurityGroups: Array<EvaluatedNetworkSecurityGroup>;
}
