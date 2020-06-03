import { Resource } from './Resource';
import { VirtualNetworkGatewayPropertiesFormat } from './VirtualNetworkGatewayPropertiesFormat';

/**
 * @description A common class for general resource information
 */
export interface VirtualNetworkGateway extends Resource {
    properties?: VirtualNetworkGatewayPropertiesFormat;
    /**
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
