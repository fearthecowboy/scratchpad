
/**
 * @description Parameters that define the source of the connection.
 * @since 2017-11-01
 */
export interface ConnectivitySource {
    /**
     * @description The ID of the resource from which a connectivity check will be initiated.
     */
    resourceId?: string;
    /**
     * @description The source port from which a connectivity check will be performed.
     */
    port: int64;
}
