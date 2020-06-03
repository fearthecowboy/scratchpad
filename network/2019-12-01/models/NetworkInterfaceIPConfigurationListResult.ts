import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
/**
 * @description Response for list ip configurations API service call.
 */
export interface NetworkInterfaceIPConfigurationListResult {
    /**
     * @description A list of ip configurations.
     */
    value: Array<NetworkInterfaceIPConfiguration>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
