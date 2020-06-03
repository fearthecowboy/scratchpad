import { LoadBalancerSkuName } from '../enums/LoadBalancerSkuName';
/**
 * @description SKU of a load balancer
 */
export interface LoadBalancerSku {
    /**
     * @description Name of a load balancer SKU.
     */
    name: LoadBalancerSkuName | string;
}
