import { SubResource } from './SubResource';
import { ApplicationGatewayProbePropertiesFormat } from './ApplicationGatewayProbePropertiesFormat';
/**
 * @description Probe of the application gateway.
 */
export interface ApplicationGatewayProbe extends SubResource {
    properties: ApplicationGatewayProbePropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * @description Type of the resource.
     */
    type: string;
}
