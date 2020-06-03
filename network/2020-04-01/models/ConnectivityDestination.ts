
/**
 * @description Parameters that define destination of connection.
 */
export interface ConnectivityDestination {
    /**
     * @description The ID of the resource to which a connection attempt will be made.
     */
    resourceId: string;
    /**
     * @description The IP address or URI the resource to which a connection attempt will be made.
     */
    address: string;
    /**
     * @description Port on which check connectivity will be performed.
     */
    port: int64;
}
