import { Resource } from './Resource';
import { LoadBalancerSku } from './LoadBalancerSku';
import { LoadBalancerPropertiesFormat } from './LoadBalancerPropertiesFormat';
/**
 * @description LoadBalancer resource.
 */
export interface LoadBalancer extends Resource {
    /**
     * @description The load balancer SKU.
     */
    sku: LoadBalancerSku;
    /**
     * @description Properties of load balancer.
     */
    properties: LoadBalancerPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
