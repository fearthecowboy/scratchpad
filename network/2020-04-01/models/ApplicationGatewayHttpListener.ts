import { SubResource } from './SubResource';
import { ApplicationGatewayHttpListenerPropertiesFormat } from './ApplicationGatewayHttpListenerPropertiesFormat';
/**
 * @description Http listener of an application gateway.
 */
export interface ApplicationGatewayHttpListener extends SubResource {
    /**
     * @description Properties of the application gateway HTTP listener.
     */
    properties: ApplicationGatewayHttpListenerPropertiesFormat;
    /**
     * @description Name of the HTTP listener that is unique within an Application Gateway.
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
