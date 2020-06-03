
/**
 * @description Properties of IPConfigurationBgpPeeringAddress.
 * @since 2019-12-01
 */
export interface IPConfigurationBgpPeeringAddress {
    /**
     * @description The ID of IP configuration which belongs to gateway.
     */
    ipconfigurationId: string;
    /**
     * @description The list of default BGP peering addresses which belong to IP configuration.
     */
    readonly defaultBgpIpAddresses: Array<string>;
    /**
     * @description The list of custom BGP peering addresses which belong to IP configuration.
     */
    customBgpIpAddresses: Array<string>;
    /**
     * @description The list of tunnel public IP addresses which belong to IP configuration.
     */
    readonly tunnelIpAddresses: Array<string>;
}
