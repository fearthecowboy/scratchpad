import { SubResource } from './SubResource';
import { ServiceEndpointPolicyDefinitionPropertiesFormat } from './ServiceEndpointPolicyDefinitionPropertiesFormat';
/**
 * @description Service Endpoint policy definitions.
 */
export interface ServiceEndpointPolicyDefinition extends SubResource {
    /**
     * @description Properties of the service endpoint policy definition.
     */
    properties: ServiceEndpointPolicyDefinitionPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
