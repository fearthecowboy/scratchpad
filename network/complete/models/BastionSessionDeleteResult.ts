import { BastionSessionState } from './BastionSessionState';

/**
 * @description Response for DisconnectActiveSessions.
 * @since 2019-12-01
 */
export interface BastionSessionDeleteResult {
    /**
     * @description List of sessions with their corresponding state.
     */
    value: Array<BastionSessionState>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
