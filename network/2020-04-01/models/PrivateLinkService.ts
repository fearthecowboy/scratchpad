import { Resource } from './Resource';
import { PrivateLinkServiceProperties } from './PrivateLinkServiceProperties';
/**
 * @description Private link service resource.
 */
export interface PrivateLinkService extends Resource {
    /**
     * @description Properties of the private link service.
     */
    properties: PrivateLinkServiceProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
