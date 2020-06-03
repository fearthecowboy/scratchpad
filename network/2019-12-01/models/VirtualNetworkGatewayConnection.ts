import { Resource } from './Resource';
import { VirtualNetworkGatewayConnectionPropertiesFormat } from './VirtualNetworkGatewayConnectionPropertiesFormat';
/**
 * @description A common class for general resource information.
 */
export interface VirtualNetworkGatewayConnection extends Resource {
    /**
     * @description Properties of the virtual network gateway connection.
     */
    properties?: VirtualNetworkGatewayConnectionPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
