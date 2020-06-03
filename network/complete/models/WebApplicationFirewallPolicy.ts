import { Resource } from './Resource';
import { WebApplicationFirewallPolicyPropertiesFormat } from './WebApplicationFirewallPolicyPropertiesFormat';

/**
 * @description Defines web application firewall policy.
 * @since 2019-07-01
 */
export interface WebApplicationFirewallPolicy extends Resource {
    /**
     * @description Properties of the web application firewall policy.
     */
    properties: WebApplicationFirewallPolicyPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
