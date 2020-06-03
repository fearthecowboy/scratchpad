
/**
 * @description Describes the source of connection monitor.
 * @since 2017-11-01
 */
export interface ConnectionMonitorSource {
    /**
     * @description The ID of the resource used as the source by connection monitor.
     */
    resourceId?: string;
    /**
     * @description The source port used by connection monitor.
     */
    port: int64;
}
