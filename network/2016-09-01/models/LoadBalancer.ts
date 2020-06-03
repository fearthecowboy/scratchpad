import { Resource } from './Resource';
import { LoadBalancerPropertiesFormat } from './LoadBalancerPropertiesFormat';
/**
 * @description LoadBalancer resource
 */
export interface LoadBalancer extends Resource {
    properties: LoadBalancerPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
