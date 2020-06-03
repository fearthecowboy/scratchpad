import { VpnServerConfiguration } from './VpnServerConfiguration';

/**
 * @description Result of the request to list all VpnServerConfigurations. It contains a list of VpnServerConfigurations and a URL nextLink to get the next set of results.
 * @since 2019-12-01
 */
export interface ListVpnServerConfigurationsResult {
    /**
     * @description List of VpnServerConfigurations.
     */
    value: Array<VpnServerConfiguration>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
