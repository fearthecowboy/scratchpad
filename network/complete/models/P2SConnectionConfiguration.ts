import { P2SConnectionConfigurationProperties } from './P2SConnectionConfigurationProperties';
import { SubResource } from './SubResource';

/**
 * @description P2SConnectionConfiguration Resource.
 * @since 2019-12-01
 */
export interface P2SConnectionConfiguration extends SubResource {
    /**
     * @description Properties of the P2S connection configuration.
     */
    properties: P2SConnectionConfigurationProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
