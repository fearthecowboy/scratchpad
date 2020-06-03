
/**
 * @description Describes the TCP configuration.
 */
export interface ConnectionMonitorTcpConfiguration {
    /**
     * @description The port to connect to.
     */
    port: int64;
    /**
     * @description Value indicating whether path evaluation with trace route should be disabled.
     */
    disableTraceRoute: boolean;
}
