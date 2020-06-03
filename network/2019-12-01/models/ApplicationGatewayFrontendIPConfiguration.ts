import { SubResource } from './SubResource';
import { ApplicationGatewayFrontendIPConfigurationPropertiesFormat } from './ApplicationGatewayFrontendIPConfigurationPropertiesFormat';
/**
 * @description Frontend IP configuration of an application gateway.
 */
export interface ApplicationGatewayFrontendIPConfiguration extends SubResource {
    /**
     * @description Properties of the application gateway frontend IP configuration.
     */
    properties: ApplicationGatewayFrontendIPConfigurationPropertiesFormat;
    /**
     * @description Name of the frontend IP configuration that is unique within an Application Gateway.
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
