
/**
 * @description The routes table associated with the ExpressRouteCircuit
 */
export interface ExpressRouteCircuitRoutesTable {
    /**
     * @description network
     */
    network: string;
    /**
     * @description nextHop
     */
    nextHop: string;
    /**
     * @description locPrf
     */
    locPrf: string;
    /**
     * @description weight.
     */
    weight: int32;
    /**
     * @description path
     */
    path: string;
}
