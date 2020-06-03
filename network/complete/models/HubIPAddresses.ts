import { AzureFirewallPublicIPAddress } from './AzureFirewallPublicIPAddress';

/**
 * @description IP addresses associated with azure firewall.
 * @since 2019-07-01
 */
export interface HubIPAddresses {
    /**
     * @description List of Public IP addresses associated with azure firewall.
     */
    publicIPAddresses: Array<AzureFirewallPublicIPAddress>;
    /**
     * @description Private IP Address associated with azure firewall.
     */
    privateIPAddress: string;
}
