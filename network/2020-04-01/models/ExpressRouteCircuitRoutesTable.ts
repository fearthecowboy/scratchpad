
/**
 * @description The routes table associated with the ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitRoutesTable {
    /**
     * @description IP address of a network entity.
     */
    network: string;
    /**
     * @description NextHop address.
     */
    nextHop: string;
    /**
     * @description Local preference value as set with the set local-preference route-map configuration command.
     */
    locPrf: string;
    /**
     * @description Route Weight.
     */
    weight: int32;
    /**
     * @description Autonomous system paths to the destination network.
     */
    path: string;
}
