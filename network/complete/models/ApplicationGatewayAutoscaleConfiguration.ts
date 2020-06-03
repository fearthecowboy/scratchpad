
/**
 * @description Application Gateway autoscale configuration.
 * @since 2019-07-01
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
