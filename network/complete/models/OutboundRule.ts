import { OutboundRulePropertiesFormat } from './OutboundRulePropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Outbound rule of the load balancer.
 * @since 2019-07-01
 */
export interface OutboundRule extends SubResource {
    /**
     * @description Properties of load balancer outbound rule.
     */
    properties: OutboundRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
