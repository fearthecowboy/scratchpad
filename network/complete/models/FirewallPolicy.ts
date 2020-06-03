import { FirewallPolicyPropertiesFormat } from './FirewallPolicyPropertiesFormat';
import { ManagedServiceIdentity } from "./ManagedServiceIdentity";
import { Resource } from './Resource';

/**
 * @description FirewallPolicy Resource.
 * @since 2019-07-01
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
    /** @description The identity of the firewall policy.
     * @since 2020-04-01
     */
    identity: ManagedServiceIdentity;
}
