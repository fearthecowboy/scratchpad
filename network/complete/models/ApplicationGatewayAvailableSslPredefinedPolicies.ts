import { ApplicationGatewaySslPredefinedPolicy } from './ApplicationGatewaySslPredefinedPolicy';

/**
 * @description Response for ApplicationGatewayAvailableSslOptions API service call.
 * @since 2017-11-01
 */
export interface ApplicationGatewayAvailableSslPredefinedPolicies {
    /**
     * @description List of available Ssl predefined policy.
     */
    value: Array<ApplicationGatewaySslPredefinedPolicy>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
