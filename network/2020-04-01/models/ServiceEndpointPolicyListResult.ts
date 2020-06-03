import { ServiceEndpointPolicy } from './ServiceEndpointPolicy';
/**
 * @description Response for ListServiceEndpointPolicies API service call.
 */
export interface ServiceEndpointPolicyListResult {
    /**
     * @description A list of ServiceEndpointPolicy resources.
     */
    value: Array<ServiceEndpointPolicy>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
