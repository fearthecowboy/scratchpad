import { SubResource } from './SubResource';
import { OutboundNatRulePropertiesFormat } from './OutboundNatRulePropertiesFormat';
/**
 * @description Outbound NAT pool of the load balancer.
 */
export interface OutboundNatRule extends SubResource {
    properties: OutboundNatRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
