import { Resource } from './Resource';
import { VirtualHubProperties } from './VirtualHubProperties';

/**
 * @description VirtualHub Resource.
 * @since 2019-07-01
 */
export interface VirtualHub extends Resource {
    /**
     * @description Properties of the virtual hub.
     */
    properties: VirtualHubProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
