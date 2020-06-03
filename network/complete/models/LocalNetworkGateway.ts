import { LocalNetworkGatewayPropertiesFormat } from './LocalNetworkGatewayPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description A common class for general resource information
 */
export interface LocalNetworkGateway extends Resource {
    properties?: LocalNetworkGatewayPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
