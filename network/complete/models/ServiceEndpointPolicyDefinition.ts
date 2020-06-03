import { ServiceEndpointPolicyDefinitionPropertiesFormat } from './ServiceEndpointPolicyDefinitionPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Service Endpoint policy definitions.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
