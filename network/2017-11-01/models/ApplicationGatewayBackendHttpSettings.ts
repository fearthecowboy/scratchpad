import { SubResource } from './SubResource';
import { ApplicationGatewayBackendHttpSettingsPropertiesFormat } from './ApplicationGatewayBackendHttpSettingsPropertiesFormat';
/**
 * @description Backend address pool settings of an application gateway.
 */
export interface ApplicationGatewayBackendHttpSettings extends SubResource {
    properties: ApplicationGatewayBackendHttpSettingsPropertiesFormat;
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
