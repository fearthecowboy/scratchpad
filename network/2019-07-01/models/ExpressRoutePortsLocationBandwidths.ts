
/**
 * ExpressRoutePorts Location Bandwidths
 * @description Real-time inventory of available ExpressRoute port bandwidths.
 */
export interface ExpressRoutePortsLocationBandwidths {
    /**
     * @description Bandwidth descriptive name.
     */
    readonly offerName: string ;
    /**
     * @description Bandwidth value in Gbps.
     */
    readonly valueInGbps: int64;
}
