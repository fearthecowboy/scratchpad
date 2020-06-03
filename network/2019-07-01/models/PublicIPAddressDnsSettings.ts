
/**
 * @description Contains FQDN of the DNS record associated with the public IP address.
 */
export interface PublicIPAddressDnsSettings {
    /**
     * @description The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    domainNameLabel: string;
    /**
     * @description The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
     */
    fqdn: string;
    /**
     * @description The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    reverseFqdn: string;
}
