import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';

/**
 * @description Response for list ip configurations API service call.
 * @since 2017-11-01
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
