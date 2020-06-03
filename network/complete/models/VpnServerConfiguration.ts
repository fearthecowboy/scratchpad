import { Resource } from './Resource';
import { VpnServerConfigurationProperties } from './VpnServerConfigurationProperties';

/**
 * @description VpnServerConfiguration Resource.
 * @since 2019-12-01
 */
export interface VpnServerConfiguration extends Resource {
    /**
     * @description Properties of the P2SVpnServer configuration.
     */
    properties: VpnServerConfigurationProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
