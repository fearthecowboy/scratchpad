import { NetworkIntentPolicyConfiguration } from './NetworkIntentPolicyConfiguration';

/**
 * @description Details of PrepareNetworkPolicies for Subnet.
 * @since 2019-07-01
 */
export interface PrepareNetworkPoliciesRequest {
    /**
     * @description The name of the service for which subnet is being prepared for.
     */
    serviceName: string;
    /**
     * @description A list of NetworkIntentPolicyConfiguration.
     */
    networkIntentPolicyConfigurations: Array<NetworkIntentPolicyConfiguration>;
}
