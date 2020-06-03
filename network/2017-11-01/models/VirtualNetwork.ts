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
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
