import { Resource } from './Resource';
import { VirtualNetworkGatewayPropertiesFormat } from './VirtualNetworkGatewayPropertiesFormat';
/**
 * @description A common class for general resource information.
 */
export interface VirtualNetworkGateway extends Resource {
    /**
     * @description Properties of the virtual network gateway.
     */
    properties?: VirtualNetworkGatewayPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
