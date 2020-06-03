import { NetworkInterfaceTapConfiguration } from './NetworkInterfaceTapConfiguration';

/**
 * @description Response for list tap configurations API service call.
 * @since 2019-07-01
 */
export interface NetworkInterfaceTapConfigurationListResult {
    /**
     * @description A list of tap configurations.
     */
    value: Array<NetworkInterfaceTapConfiguration>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
