import { LoadBalancerPropertiesFormat } from './LoadBalancerPropertiesFormat';
import { LoadBalancerSku } from "./LoadBalancerSku";
import { Resource } from './Resource';

/**
 * @description LoadBalancer resource
 */
export interface LoadBalancer extends Resource {
    properties: LoadBalancerPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /** @description The load balancer SKU.
     * @since 2017-11-01
     */
    sku: LoadBalancerSku;
}
