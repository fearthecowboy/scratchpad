
/**
 * @description The session state detail for a target.
 * @since 2019-12-01
 */
export interface BastionSessionState {
    /**
     * @description A unique id for the session.
     */
    readonly sessionId: string ;
    /**
     * @description Used for extra information.
     */
    readonly message: string ;
    /**
     * @description The state of the session. Disconnected/Failed/NotFound.
     */
    readonly state: string ;
}
