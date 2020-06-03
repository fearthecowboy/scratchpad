
/**
 * @description Describes the TCP configuration.
 * @since 2019-12-01
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
