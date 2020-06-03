
/**
 * @description Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.
 */
export interface ApplicationGatewayConnectionDraining {
    /**
     * @description Whether connection draining is enabled or not.
     */
    enabled?: boolean;
    /**
     * @description The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
     */
    drainTimeoutInSec?: int32 & Minimum<1> & Maximum<3600>;
}
