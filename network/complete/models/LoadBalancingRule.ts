import { LoadBalancingRulePropertiesFormat } from './LoadBalancingRulePropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description A load balancing rule for a load balancer.
 */
export interface LoadBalancingRule extends SubResource {
    properties: LoadBalancingRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /** @description Type of the resource.
     * @since 2019-07-01
     */
    readonly type: string;
}
