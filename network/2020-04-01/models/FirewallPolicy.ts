import { Resource } from './Resource';
import { FirewallPolicyPropertiesFormat } from './FirewallPolicyPropertiesFormat';
import { ManagedServiceIdentity } from './ManagedServiceIdentity';
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
    /**
     * @description The identity of the firewall policy.
     */
    identity: ManagedServiceIdentity;
}
