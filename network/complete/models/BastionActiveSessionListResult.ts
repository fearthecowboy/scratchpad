import { BastionActiveSession } from './BastionActiveSession';

/**
 * @description Response for GetActiveSessions.
 * @since 2019-12-01
 */
export interface BastionActiveSessionListResult {
    /**
     * @description List of active sessions on the bastion.
     */
    value: Array<BastionActiveSession>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
