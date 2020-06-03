import { P2SVpnServerConfiguration } from './P2SVpnServerConfiguration';
/**
 * @description Result of the request to list all P2SVpnServerConfigurations associated to a VirtualWan. It contains a list of P2SVpnServerConfigurations and a URL nextLink to get the next set of results.
 */
export interface ListP2SVpnServerConfigurationsResult {
    /**
     * @description List of P2SVpnServerConfigurations.
     */
    value: Array<P2SVpnServerConfiguration>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
