import { Resource } from './Resource';
import { VirtualNetworkGatewayConnectionListEntityPropertiesFormat } from './VirtualNetworkGatewayConnectionListEntityPropertiesFormat';
/**
 * @description A common class for general resource information.
 */
export interface VirtualNetworkGatewayConnectionListEntity extends Resource {
    /**
     * @description Properties of the virtual network gateway connection.
     */
    properties?: VirtualNetworkGatewayConnectionListEntityPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
