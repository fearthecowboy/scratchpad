import { FrontendIPConfiguration } from './FrontendIPConfiguration';

/**
 * @description Response for ListFrontendIPConfiguration API service call.
 * @since 2017-11-01
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
