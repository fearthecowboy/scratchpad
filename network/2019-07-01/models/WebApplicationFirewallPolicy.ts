import { Resource } from './Resource';
import { WebApplicationFirewallPolicyPropertiesFormat } from './WebApplicationFirewallPolicyPropertiesFormat';
/**
 * @description Defines web application firewall policy.
 */
export interface WebApplicationFirewallPolicy extends Resource {
    /**
     * @description Properties of the web application firewall policy.
     */
    properties: WebApplicationFirewallPolicyPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
