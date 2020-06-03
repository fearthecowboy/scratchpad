
/**
 * @description Contains custom Dns resolution configuration from customer.
 */
export interface CustomDnsConfigPropertiesFormat {
    /**
     * @description Fqdn that resolves to private endpoint ip address.
     */
    fqdn: string;
    /**
     * @description A list of private ip addresses of the private endpoint.
     */
    ipAddresses: Array<string>;
}
