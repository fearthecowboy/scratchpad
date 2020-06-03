
/**
 * @extensible
 * @description Health of backend server. Possible values are: 'Unknown', 'Up', 'Down', and 'Partial'.
 */
export enum ApplicationGatewayBackendHealthServerHealth {
    /**
     *
     */
    Unknown = 'Unknown',
    /**
     *
     */
    Up = 'Up',
    /**
     *
     */
    Down = 'Down',
    /**
     *
     */
    Partial = 'Partial',
    /**
     * @since 2017-11-01
     */
    Draining = "Draining"
}
