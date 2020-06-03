import { SubResource } from './SubResource';
import { ApplicationGatewayHttpListenerPropertiesFormat } from './ApplicationGatewayHttpListenerPropertiesFormat';
/**
 * @description Http listener of an application gateway.
 */
export interface ApplicationGatewayHttpListener extends SubResource {
    properties: ApplicationGatewayHttpListenerPropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
