import { P2SVpnServerConfigurationProperties } from './P2SVpnServerConfigurationProperties';
import { SubResource } from './SubResource';
/**
 * @description P2SVpnServerConfiguration Resource.
 * @since 2019-07-01
 */
export interface P2SVpnServerConfiguration extends SubResource {
    /**
     * @description Properties of the P2SVpnServer configuration.
     */
    properties: P2SVpnServerConfigurationProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
