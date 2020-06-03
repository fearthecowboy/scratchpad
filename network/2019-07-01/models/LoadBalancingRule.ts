import { SubResource } from './SubResource';
import { LoadBalancingRulePropertiesFormat } from './LoadBalancingRulePropertiesFormat';
/**
 * @description A load balancing rule for a load balancer.
 */
export interface LoadBalancingRule extends SubResource {
    /**
     * @description Properties of load balancer load balancing rule.
     */
    properties: LoadBalancingRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
