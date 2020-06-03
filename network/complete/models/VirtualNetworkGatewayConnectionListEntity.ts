import { Resource } from './Resource';
import { VirtualNetworkGatewayConnectionListEntityPropertiesFormat } from './VirtualNetworkGatewayConnectionListEntityPropertiesFormat';

/**
 * @description A common class for general resource information
 * @since 2017-11-01
 */
export interface VirtualNetworkGatewayConnectionListEntity extends Resource {
    /**
     * @description Properties of the virtual network gateway connection.
     */
    properties?: VirtualNetworkGatewayConnectionListEntityPropertiesFormat;
    /**
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
