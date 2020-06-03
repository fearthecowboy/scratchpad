
/**
 * @description DNS settings of a network interface.
 */
export interface NetworkInterfaceDnsSettings {
    /**
     * @description List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
     */
    dnsServers: Array<string>;
    /**
     * @description If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
     */
    readonly appliedDnsServers: Array<string>;
    /**
     * @description Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
     */
    internalDnsNameLabel: string;
    /**
     * @description Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
     */
    readonly internalFqdn: string ;
    /**
     * @description Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
     */
    readonly internalDomainNameSuffix: string ;
}
