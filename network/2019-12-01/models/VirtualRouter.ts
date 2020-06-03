import { Resource } from './Resource';
import { VirtualRouterPropertiesFormat } from './VirtualRouterPropertiesFormat';
/**
 * @description VirtualRouter Resource.
 */
export interface VirtualRouter extends Resource {
    /**
     * @description Properties of the Virtual Router.
     */
    properties: VirtualRouterPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
