import { ApplicationGatewayHttpListenerPropertiesFormat } from './ApplicationGatewayHttpListenerPropertiesFormat';
import { SubResource } from './SubResource';

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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /** @description Type of the resource.
     * @since 2017-11-01
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly type: string;
}
