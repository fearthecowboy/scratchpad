import { SubResource } from './SubResource';
import { ApplicationGatewayIPConfigurationPropertiesFormat } from './ApplicationGatewayIPConfigurationPropertiesFormat';
/**
 * @description IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
 */
export interface ApplicationGatewayIPConfiguration extends SubResource {
    /**
     * @description Properties of the application gateway IP configuration.
     */
    properties: ApplicationGatewayIPConfigurationPropertiesFormat;
    /**
     * @description Name of the IP configuration that is unique within an Application Gateway.
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
