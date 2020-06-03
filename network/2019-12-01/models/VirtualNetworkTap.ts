import { Resource } from './Resource';
import { VirtualNetworkTapPropertiesFormat } from './VirtualNetworkTapPropertiesFormat';
/**
 * @description Virtual Network Tap resource.
 */
export interface VirtualNetworkTap extends Resource {
    /**
     * @description Virtual Network Tap Properties.
     */
    properties: VirtualNetworkTapPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
