
/**
 * @description Application Gateway autoscale configuration.
 */
export interface ApplicationGatewayAutoscaleConfiguration {
    /**
     * @description Lower bound on number of Application Gateway capacity.
     */
    minCapacity?: int32 & Minimum<0>;
    /**
     * @description Upper bound on number of Application Gateway capacity.
     */
    maxCapacity: int32 & Minimum<2>;
}
