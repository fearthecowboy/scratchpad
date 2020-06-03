import { PrivateLinkServiceConnectionProperties } from './PrivateLinkServiceConnectionProperties';
import { SubResource } from './SubResource';

/**
 * @description PrivateLinkServiceConnection resource.
 * @since 2019-07-01
 */
export interface PrivateLinkServiceConnection extends SubResource {
    /**
     * @description Properties of the private link service connection.
     */
    properties: PrivateLinkServiceConnectionProperties;
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
