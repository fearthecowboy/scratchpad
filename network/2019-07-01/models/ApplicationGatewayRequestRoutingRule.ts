import { SubResource } from './SubResource';
import { ApplicationGatewayRequestRoutingRulePropertiesFormat } from './ApplicationGatewayRequestRoutingRulePropertiesFormat';
/**
 * @description Request routing rule of an application gateway.
 */
export interface ApplicationGatewayRequestRoutingRule extends SubResource {
    /**
     * @description Properties of the application gateway request routing rule.
     */
    properties: ApplicationGatewayRequestRoutingRulePropertiesFormat;
    /**
     * @description Name of the request routing rule that is unique within an Application Gateway.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * @description Type of the resource.
     */
    type: string;
}
