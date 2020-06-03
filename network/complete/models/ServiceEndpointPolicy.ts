import { Resource } from './Resource';
import { ServiceEndpointPolicyPropertiesFormat } from './ServiceEndpointPolicyPropertiesFormat';

/**
 * @description Service End point policy resource.
 * @since 2019-07-01
 */
export interface ServiceEndpointPolicy extends Resource {
    /**
     * @description Properties of the service end point policy.
     */
    properties: ServiceEndpointPolicyPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
