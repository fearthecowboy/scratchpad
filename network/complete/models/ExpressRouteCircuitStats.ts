
/**
 * @description Contains stats associated with the peering.
 */
export interface ExpressRouteCircuitStats {
    /**
     * @description Gets BytesIn of the peering.
     */
    primarybytesIn: int64;
    /**
     * @description Gets BytesOut of the peering.
     */
    primarybytesOut: int64;
    /**
     * @description Gets BytesIn of the peering.
     */
    secondarybytesIn: int64;
    /**
     * @description Gets BytesOut of the peering.
     */
    secondarybytesOut: int64;
}
