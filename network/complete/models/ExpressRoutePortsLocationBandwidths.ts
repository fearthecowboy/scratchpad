
/**
 * ExpressRoutePorts Location Bandwidths
 * @description Real-time inventory of available ExpressRoute port bandwidths.
 * @since 2019-07-01
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
