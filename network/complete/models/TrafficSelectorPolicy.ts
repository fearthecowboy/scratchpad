
/**
 * @description An traffic selector policy for a virtual network gateway connection.
 * @since 2019-07-01
 */
export interface TrafficSelectorPolicy {
    /**
     * @description A collection of local address spaces in CIDR format
     */
    localAddressRanges?: Array<string>;
    /**
     * @description A collection of remote address spaces in CIDR format
     */
    remoteAddressRanges?: Array<string>;
}
