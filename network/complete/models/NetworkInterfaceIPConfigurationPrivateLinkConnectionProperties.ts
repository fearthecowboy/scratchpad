
/**
 * @description PrivateLinkConnection properties for the network interface.
 * @since 2019-07-01
 */
export interface NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties {
    /**
     * @description The group ID for current private link connection.
     */
    readonly groupId: string ;
    /**
     * @description The required member name for current private link connection.
     */
    readonly requiredMemberName: string ;
    /**
     * @description List of FQDNs for current private link connection.
     */
    readonly fqdns: Array<string>;
}
