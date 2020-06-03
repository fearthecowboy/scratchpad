import { SubResource } from './SubResource';
import { FrontendIPConfigurationPropertiesFormat } from './FrontendIPConfigurationPropertiesFormat';
/**
 * @description Frontend IP address of the load balancer.
 */
export interface FrontendIPConfiguration extends SubResource {
    /**
     * @description Properties of the load balancer probe.
     */
    properties: FrontendIPConfigurationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * @description A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones: Array<string>;
}
