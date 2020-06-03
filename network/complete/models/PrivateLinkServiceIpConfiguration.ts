import { PrivateLinkServiceIpConfigurationProperties } from './PrivateLinkServiceIpConfigurationProperties';
import { SubResource } from './SubResource';

/**
 * @description The private link service ip configuration.
 * @since 2019-07-01
 */
export interface PrivateLinkServiceIpConfiguration extends SubResource {
    /**
     * @description Properties of the private link service ip configuration.
     */
    properties: PrivateLinkServiceIpConfigurationProperties;
    /**
     * @description The name of private link service ip configuration.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description The resource type.
     */
    readonly type: string ;
}
