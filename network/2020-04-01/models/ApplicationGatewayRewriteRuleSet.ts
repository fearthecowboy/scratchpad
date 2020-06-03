import { SubResource } from './SubResource';
import { ApplicationGatewayRewriteRuleSetPropertiesFormat } from './ApplicationGatewayRewriteRuleSetPropertiesFormat';
/**
 * @description Rewrite rule set of an application gateway.
 */
export interface ApplicationGatewayRewriteRuleSet extends SubResource {
    /**
     * @description Properties of the application gateway rewrite rule set.
     */
    properties: ApplicationGatewayRewriteRuleSetPropertiesFormat;
    /**
     * @description Name of the rewrite rule set that is unique within an Application Gateway.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
