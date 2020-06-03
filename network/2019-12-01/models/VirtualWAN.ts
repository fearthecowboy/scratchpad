import { Resource } from './Resource';
import { VirtualWanProperties } from './VirtualWanProperties';
/**
 * @description VirtualWAN Resource.
 */
export interface VirtualWAN extends Resource {
    /**
     * @description Properties of the virtual WAN.
     */
    properties: VirtualWanProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
