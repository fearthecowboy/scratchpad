
/**
 * @description Describes the destination of connection monitor.
 * @since 2017-11-01
 */
export interface ConnectionMonitorDestination {
    /**
     * @description The ID of the resource used as the destination by connection monitor.
     */
    resourceId: string;
    /**
     * @description Address of the connection monitor destination (IP or domain name).
     */
    address: string;
    /**
     * @description The destination port used by connection monitor.
     */
    port: int64;
}
