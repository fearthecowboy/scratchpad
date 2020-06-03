import { SubResource } from './SubResource';
import { ApplicationGatewayFrontendIPConfigurationPropertiesFormat } from './ApplicationGatewayFrontendIPConfigurationPropertiesFormat';
/**
 * @description Frontend IP configuration of an application gateway.
 */
export interface ApplicationGatewayFrontendIPConfiguration extends SubResource {
    properties: ApplicationGatewayFrontendIPConfigurationPropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
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
