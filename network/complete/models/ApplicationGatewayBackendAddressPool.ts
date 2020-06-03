import { ApplicationGatewayBackendAddressPoolPropertiesFormat } from './ApplicationGatewayBackendAddressPoolPropertiesFormat';
import { SubResource } from './SubResource';

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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /** @description Type of the resource.
     * @since 2017-11-01
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly type: string;
}
