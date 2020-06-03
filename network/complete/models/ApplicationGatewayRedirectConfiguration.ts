import { ApplicationGatewayRedirectConfigurationPropertiesFormat } from './ApplicationGatewayRedirectConfigurationPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Redirect configuration of an application gateway.
 * @since 2017-11-01
 */
export interface ApplicationGatewayRedirectConfiguration extends SubResource {
    properties: ApplicationGatewayRedirectConfigurationPropertiesFormat;
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /**
     * @description Type of the resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly type: string;
}
