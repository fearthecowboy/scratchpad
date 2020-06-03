import { SubResource } from './SubResource';
import { ApplicationGatewayBackendAddressPoolPropertiesFormat } from './ApplicationGatewayBackendAddressPoolPropertiesFormat';
/**
 * @description Backend Address Pool of an application gateway.
 */
export interface ApplicationGatewayBackendAddressPool extends SubResource {
    properties: ApplicationGatewayBackendAddressPoolPropertiesFormat;
    /**
     * @description Resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
