
/**
 * @description The routes table associated with the ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitRoutesTableSummary {
    /**
     * @description Neighbor
     */
    neighbor: string;
    /**
     * @description BGP version number spoken to the neighbor.
     */
    v: int32;
    /**
     * @description Autonomous system number.
     */
    as: int32;
    /**
     * @description The length of time that the BGP session has been in the Established state, or the current status if not in the Established state.
     */
    upDown: string;
    /**
     * @description Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group.
     */
    statePfxRcd: string;
}
