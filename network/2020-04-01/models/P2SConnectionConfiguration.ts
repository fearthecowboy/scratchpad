import { SubResource } from './SubResource';
import { P2SConnectionConfigurationProperties } from './P2SConnectionConfigurationProperties';
/**
 * @description P2SConnectionConfiguration Resource.
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
