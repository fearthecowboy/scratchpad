import { SubResource } from './SubResource';
import { ApplicationGatewayFrontendPortPropertiesFormat } from './ApplicationGatewayFrontendPortPropertiesFormat';
/**
 * @description Frontend port of an application gateway.
 */
export interface ApplicationGatewayFrontendPort extends SubResource {
    properties: ApplicationGatewayFrontendPortPropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
