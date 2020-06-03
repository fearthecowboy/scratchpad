
/**
 * @description ThreatIntel Whitelist for Firewall Policy.
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
