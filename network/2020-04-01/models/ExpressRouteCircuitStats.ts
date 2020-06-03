
/**
 * @description Contains stats associated with the peering.
 */
export interface ExpressRouteCircuitStats {
    /**
     * @description The Primary BytesIn of the peering.
     */
    primarybytesIn: int64;
    /**
     * @description The primary BytesOut of the peering.
     */
    primarybytesOut: int64;
    /**
     * @description The secondary BytesIn of the peering.
     */
    secondarybytesIn: int64;
    /**
     * @description The secondary BytesOut of the peering.
     */
    secondarybytesOut: int64;
}
