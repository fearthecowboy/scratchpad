import { SubResource } from './SubResource';
import { ApplicationGatewayRedirectConfigurationPropertiesFormat } from './ApplicationGatewayRedirectConfigurationPropertiesFormat';
/**
 * @description Redirect configuration of an application gateway.
 */
export interface ApplicationGatewayRedirectConfiguration extends SubResource {
    /**
     * @description Properties of the application gateway redirect configuration.
     */
    properties: ApplicationGatewayRedirectConfigurationPropertiesFormat;
    /**
     * @description Name of the redirect configuration that is unique within an Application Gateway.
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
