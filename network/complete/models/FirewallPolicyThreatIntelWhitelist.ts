
/**
 * @description ThreatIntel Whitelist for Firewall Policy.
 * @since 2020-04-01
 */
export interface FirewallPolicyThreatIntelWhitelist {
    /**
     * @description List of IP addresses for the ThreatIntel Whitelist.
     */
    ipAddresses: Array<string>;
    /**
     * @description List of FQDNs for the ThreatIntel Whitelist.
     */
    fqdns: Array<string>;
}
