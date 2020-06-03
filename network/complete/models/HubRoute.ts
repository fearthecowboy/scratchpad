
/**
 * @description RouteTable route.
 * @since 2020-04-01
 */
export interface HubRoute {
    /**
     * @description The name of the Route that is unique within a RouteTable. This name can be used to access this route.
     */
    name?: string;
    /**
     * @description The type of destinations (eg: CIDR, ResourceId, Service).
     */
    destinationType?: string;
    /**
     * @description List of all destinations.
     */
    destinations?: Array<string>;
    /**
     * @description The type of next hop (eg: ResourceId).
     */
    nextHopType?: string;
    /**
     * @description NextHop resource ID.
     */
    nextHop?: string;
}
