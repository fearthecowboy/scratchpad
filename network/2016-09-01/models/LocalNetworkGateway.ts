import { Resource } from './Resource';
import { LocalNetworkGatewayPropertiesFormat } from './LocalNetworkGatewayPropertiesFormat';
/**
 * @description A common class for general resource information
 */
export interface LocalNetworkGateway extends Resource {
    properties?: LocalNetworkGatewayPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
