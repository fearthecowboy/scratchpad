import { Resource } from './Resource';
import { VirtualNetworkPropertiesFormat } from './VirtualNetworkPropertiesFormat';
/**
 * @description Virtual Network resource.
 */
export interface VirtualNetwork extends Resource {
    /**
     * @description Properties of the virtual network.
     */
    properties: VirtualNetworkPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
