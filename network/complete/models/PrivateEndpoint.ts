import { PrivateEndpointProperties } from './PrivateEndpointProperties';
import { Resource } from './Resource';

/**
 * @description Private endpoint resource.
 * @since 2019-07-01
 */
export interface PrivateEndpoint extends Resource {
    /**
     * @description Properties of the private endpoint.
     */
    properties: PrivateEndpointProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
