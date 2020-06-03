import { SubResource } from './SubResource';
import { ApplicationGatewayRequestRoutingRulePropertiesFormat } from './ApplicationGatewayRequestRoutingRulePropertiesFormat';
/**
 * @description Request routing rule of an application gateway.
 */
export interface ApplicationGatewayRequestRoutingRule extends SubResource {
    properties: ApplicationGatewayRequestRoutingRulePropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
