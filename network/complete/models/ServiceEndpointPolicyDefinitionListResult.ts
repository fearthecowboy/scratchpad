import { ServiceEndpointPolicyDefinition } from './ServiceEndpointPolicyDefinition';

/**
 * @description Response for ListServiceEndpointPolicyDefinition API service call. Retrieves all service endpoint policy definition that belongs to a service endpoint policy.
 * @since 2019-07-01
 */
export interface ServiceEndpointPolicyDefinitionListResult {
    /**
     * @description The service endpoint policy definition in a service endpoint policy.
     */
    value: Array<ServiceEndpointPolicyDefinition>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
