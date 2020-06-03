import { ApplicationGatewaySslPredefinedPolicy } from './ApplicationGatewaySslPredefinedPolicy';
/**
 * @description Response for ApplicationGatewayAvailableSslOptions API service call.
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
