import { SubResource } from './SubResource';
import { OutboundRulePropertiesFormat } from './OutboundRulePropertiesFormat';
/**
 * @description Outbound rule of the load balancer.
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
     */
    etag: string;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
