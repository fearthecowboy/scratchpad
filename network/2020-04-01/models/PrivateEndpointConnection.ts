import { SubResource } from './SubResource';
import { PrivateEndpointConnectionProperties } from './PrivateEndpointConnectionProperties';
/**
 * @description PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnection extends SubResource {
    /**
     * @description Properties of the private end point connection.
     */
    properties: PrivateEndpointConnectionProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description The resource type.
     */
    readonly type: string ;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
