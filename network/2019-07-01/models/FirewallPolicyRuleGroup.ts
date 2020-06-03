import { SubResource } from './SubResource';
import { FirewallPolicyRuleGroupProperties } from './FirewallPolicyRuleGroupProperties';
/**
 * @description Rule Group resource.
 */
export interface FirewallPolicyRuleGroup extends SubResource {
    /**
     * @description The properties of the firewall policy rule group.
     */
    properties: FirewallPolicyRuleGroupProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Rule Group type.
     */
    readonly type: string ;
}
