import { SubResource } from './SubResource';
import { ApplicationGatewayUrlPathMapPropertiesFormat } from './ApplicationGatewayUrlPathMapPropertiesFormat';
/**
 * @description UrlPathMaps give a url path to the backend mapping information for PathBasedRouting.
 */
export interface ApplicationGatewayUrlPathMap extends SubResource {
    /**
     * @description Properties of the application gateway URL path map.
     */
    properties: ApplicationGatewayUrlPathMapPropertiesFormat;
    /**
     * @description Name of the URL path map that is unique within an Application Gateway.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
