
/**
 * @description VirtualHub route.
 * @since 2019-07-01
 */
export interface VirtualHubRoute {
    /**
     * @description List of all addressPrefixes.
     */
    addressPrefixes: Array<string>;
    /**
     * @description NextHop ip address.
     */
    nextHopIpAddress: string;
}
