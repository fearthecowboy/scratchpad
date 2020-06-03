import { Resource } from './Resource';
import { FirewallPolicyPropertiesFormat } from './FirewallPolicyPropertiesFormat';
/**
 * @description FirewallPolicy Resource.
 */
export interface FirewallPolicy extends Resource {
    /**
     * @description Properties of the firewall policy.
     */
    properties: FirewallPolicyPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
