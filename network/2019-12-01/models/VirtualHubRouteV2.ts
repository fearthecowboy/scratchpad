
/**
 * @description VirtualHubRouteTableV2 route.
 */
export interface VirtualHubRouteV2 {
    /**
     * @description The type of destinations.
     */
    destinationType: string;
    /**
     * @description List of all destinations.
     */
    destinations: Array<string>;
    /**
     * @description The type of next hops.
     */
    nextHopType: string;
    /**
     * @description NextHops ip address.
     */
    nextHops: Array<string>;
}
