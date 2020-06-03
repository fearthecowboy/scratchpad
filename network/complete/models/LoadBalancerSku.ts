import { LoadBalancerSkuName } from '../enums/LoadBalancerSkuName';

/**
 * @description SKU of a load balancer
 * @since 2017-11-01
 */
export interface LoadBalancerSku {
    /**
     * @description Name of a load balancer SKU.
     */
    name: LoadBalancerSkuName | string;
}
