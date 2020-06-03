import { SubResource } from './SubResource';
import { ApplicationGatewayBackendHttpSettingsPropertiesFormat } from './ApplicationGatewayBackendHttpSettingsPropertiesFormat';
/**
 * @description Backend address pool settings of an application gateway.
 */
export interface ApplicationGatewayBackendHttpSettings extends SubResource {
    /**
     * @description Properties of the application gateway backend HTTP settings.
     */
    properties: ApplicationGatewayBackendHttpSettingsPropertiesFormat;
    /**
     * @description Name of the backend http settings that is unique within an Application Gateway.
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
