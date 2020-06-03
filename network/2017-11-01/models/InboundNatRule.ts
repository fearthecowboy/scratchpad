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
     * @description Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
