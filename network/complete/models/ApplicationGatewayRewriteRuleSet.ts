import { ApplicationGatewayRewriteRuleSetPropertiesFormat } from './ApplicationGatewayRewriteRuleSetPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Rewrite rule set of an application gateway.
 * @since 2019-07-01
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
