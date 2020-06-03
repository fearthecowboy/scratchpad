import { NetworkSecurityGroup } from './NetworkSecurityGroup';
/**
 * @description Response for ListNetworkSecurityGroups API service call.
 */
export interface NetworkSecurityGroupListResult {
    /**
     * @description A list of NetworkSecurityGroup resources.
     */
    value: Array<NetworkSecurityGroup>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
