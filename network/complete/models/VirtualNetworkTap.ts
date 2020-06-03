import { Resource } from './Resource';
import { VirtualNetworkTapPropertiesFormat } from './VirtualNetworkTapPropertiesFormat';

/**
 * @description Virtual Network Tap resource.
 * @since 2019-07-01
 */
export interface VirtualNetworkTap extends Resource {
    /**
     * @description Virtual Network Tap Properties.
     */
    properties: VirtualNetworkTapPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
