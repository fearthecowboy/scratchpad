import { Resource } from './Resource';
import { PrivateEndpointProperties } from './PrivateEndpointProperties';
/**
 * @description Private endpoint resource.
 */
export interface PrivateEndpoint extends Resource {
    /**
     * @description Properties of the private endpoint.
     */
    properties: PrivateEndpointProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
