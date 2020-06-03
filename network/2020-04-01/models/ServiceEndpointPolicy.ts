import { Resource } from './Resource';
import { ServiceEndpointPolicyPropertiesFormat } from './ServiceEndpointPolicyPropertiesFormat';
/**
 * @description Service End point policy resource.
 */
export interface ServiceEndpointPolicy extends Resource {
    /**
     * @description Properties of the service end point policy.
     */
    properties: ServiceEndpointPolicyPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
