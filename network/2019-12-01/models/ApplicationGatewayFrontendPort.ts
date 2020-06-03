import { SubResource } from './SubResource';
import { ApplicationGatewayFrontendPortPropertiesFormat } from './ApplicationGatewayFrontendPortPropertiesFormat';
/**
 * @description Frontend port of an application gateway.
 */
export interface ApplicationGatewayFrontendPort extends SubResource {
    /**
     * @description Properties of the application gateway frontend port.
     */
    properties: ApplicationGatewayFrontendPortPropertiesFormat;
    /**
     * @description Name of the frontend port that is unique within an Application Gateway.
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
