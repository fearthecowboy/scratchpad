
/**
 * @description DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options.
 */
export interface DhcpOptions {
    /**
     * @description The list of DNS servers IP addresses.
     */
    dnsServers: Array<string>;
}
