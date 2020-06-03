import { FirewallPolicyRuleGroupProperties } from './FirewallPolicyRuleGroupProperties';
import { SubResource } from './SubResource';

/**
 * @description Rule Group resource.
 * @since 2019-07-01
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
