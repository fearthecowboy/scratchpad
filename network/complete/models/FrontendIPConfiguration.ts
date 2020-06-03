import { FrontendIPConfigurationPropertiesFormat } from './FrontendIPConfigurationPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Frontend IP address of the load balancer.
 */
export interface FrontendIPConfiguration extends SubResource {
    properties: FrontendIPConfigurationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /** @description A list of availability zones denoting the IP allocated for the resource needs to come from.
     * @since 2017-11-01
     */
    zones: Array<string>;
    /** @description Type of the resource.
     * @since 2019-07-01
     */
    readonly type: string;
}
