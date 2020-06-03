import { Resource } from './Resource';
import { VirtualNetworkGatewayConnectionPropertiesFormat } from './VirtualNetworkGatewayConnectionPropertiesFormat';
/**
 * @description A common class for general resource information
 */
export interface VirtualNetworkGatewayConnection extends Resource {
    properties?: VirtualNetworkGatewayConnectionPropertiesFormat;
    /**
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
