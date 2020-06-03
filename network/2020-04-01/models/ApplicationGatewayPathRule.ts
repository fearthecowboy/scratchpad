import { SubResource } from './SubResource';
import { ApplicationGatewayPathRulePropertiesFormat } from './ApplicationGatewayPathRulePropertiesFormat';
/**
 * @description Path rule of URL path map of an application gateway.
 */
export interface ApplicationGatewayPathRule extends SubResource {
    /**
     * @description Properties of the application gateway path rule.
     */
    properties: ApplicationGatewayPathRulePropertiesFormat;
    /**
     * @description Name of the path rule that is unique within an Application Gateway.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
