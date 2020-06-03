import { ApplicationGatewayRewriteRule } from './ApplicationGatewayRewriteRule';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of rewrite rule set of the application gateway.
 */
export interface ApplicationGatewayRewriteRuleSetPropertiesFormat {
    /**
     * @description Rewrite rules in the rewrite rule set.
     */
    rewriteRules: Array<ApplicationGatewayRewriteRule>;
    /**
     * @description The provisioning state of the rewrite rule set resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
