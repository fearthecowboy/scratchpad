import { SubResource } from './SubResource';
import { InboundNatRulePropertiesFormat } from './InboundNatRulePropertiesFormat';
/**
 * @description Inbound NAT rule of the load balancer.
 */
export interface InboundNatRule extends SubResource {
    /**
     * @description Properties of load balancer inbound nat rule.
     */
    properties: InboundNatRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
