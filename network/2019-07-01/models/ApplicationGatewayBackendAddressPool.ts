import { SubResource } from './SubResource';
import { ApplicationGatewayBackendAddressPoolPropertiesFormat } from './ApplicationGatewayBackendAddressPoolPropertiesFormat';
/**
 * @description Backend Address Pool of an application gateway.
 */
export interface ApplicationGatewayBackendAddressPool extends SubResource {
    /**
     * @description Properties of the application gateway backend address pool.
     */
    properties: ApplicationGatewayBackendAddressPoolPropertiesFormat;
    /**
     * @description Name of the backend address pool that is unique within an Application Gateway.
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
