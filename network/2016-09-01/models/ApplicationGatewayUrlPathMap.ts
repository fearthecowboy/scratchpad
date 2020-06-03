import { SubResource } from './SubResource';
import { ApplicationGatewayUrlPathMapPropertiesFormat } from './ApplicationGatewayUrlPathMapPropertiesFormat';
/**
 * @description UrlPathMaps give a url path to the backend mapping information for PathBasedRouting.
 */
export interface ApplicationGatewayUrlPathMap extends SubResource {
    properties: ApplicationGatewayUrlPathMapPropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
