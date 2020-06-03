import { SubResource } from './SubResource';
import { ApplicationGatewayPathRulePropertiesFormat } from './ApplicationGatewayPathRulePropertiesFormat';
/**
 * @description Path rule of URL path map of an application gateway.
 */
export interface ApplicationGatewayPathRule extends SubResource {
    properties: ApplicationGatewayPathRulePropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
