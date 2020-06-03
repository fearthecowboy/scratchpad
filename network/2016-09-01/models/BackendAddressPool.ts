import { SubResource } from './SubResource';
import { BackendAddressPoolPropertiesFormat } from './BackendAddressPoolPropertiesFormat';
/**
 * @description Pool of backend IP addresses.
 */
export interface BackendAddressPool extends SubResource {
    properties: BackendAddressPoolPropertiesFormat;
    /**
     * @description Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
