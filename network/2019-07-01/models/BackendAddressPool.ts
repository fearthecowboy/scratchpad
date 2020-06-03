import { SubResource } from './SubResource';
import { BackendAddressPoolPropertiesFormat } from './BackendAddressPoolPropertiesFormat';
/**
 * @description Pool of backend IP addresses.
 */
export interface BackendAddressPool extends SubResource {
    /**
     * @description Properties of load balancer backend address pool.
     */
    properties: BackendAddressPoolPropertiesFormat;
    /**
     * @description The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
