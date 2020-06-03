import { SubResource } from './SubResource';
import { ApplicationGatewayProbePropertiesFormat } from './ApplicationGatewayProbePropertiesFormat';
/**
 * @description Probe of the application gateway.
 */
export interface ApplicationGatewayProbe extends SubResource {
    /**
     * @description Properties of the application gateway probe.
     */
    properties: ApplicationGatewayProbePropertiesFormat;
    /**
     * @description Name of the probe that is unique within an Application Gateway.
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
