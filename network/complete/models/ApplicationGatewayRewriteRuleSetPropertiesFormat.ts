import { ProvisioningState } from '../enums/ProvisioningState';
import { ApplicationGatewayRewriteRule } from './ApplicationGatewayRewriteRule';

/**
 * @description Properties of rewrite rule set of the application gateway.
 * @since 2019-07-01
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
