import { NetworkIntentPolicy } from './NetworkIntentPolicy';
/**
 * @description Details of NetworkIntentPolicyConfiguration for PrepareNetworkPoliciesRequest.
 */
export interface NetworkIntentPolicyConfiguration {
    /**
     * @description The name of the Network Intent Policy for storing in target subscription.
     */
    networkIntentPolicyName: string;
    /**
     * @description Source network intent policy.
     */
    sourceNetworkIntentPolicy: NetworkIntentPolicy;
}
