import { FrontendIPConfiguration } from './FrontendIPConfiguration';
/**
 * @description Response for ListFrontendIPConfiguration API service call.
 */
export interface LoadBalancerFrontendIPConfigurationListResult {
    /**
     * @description A list of frontend IP configurations in a load balancer.
     */
    value: Array<FrontendIPConfiguration>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
