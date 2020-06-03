import { Resource } from './Resource';
import { VirtualRouterPropertiesFormat } from './VirtualRouterPropertiesFormat';

/**
 * @description VirtualRouter Resource.
 * @since 2019-07-01
 */
export interface VirtualRouter extends Resource {
    /**
     * @description Properties of the Virtual Router.
     */
    properties: VirtualRouterPropertiesFormat;
    /**
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
