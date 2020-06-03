import { TroubleshootingRecommendedActions } from './TroubleshootingRecommendedActions';

/**
 * @description Information gained from troubleshooting of specified resource.
 */
export interface TroubleshootingDetails {
    /**
     * @description The id of the get troubleshoot operation.
     */
    id: string;
    /**
     * @description Reason type of failure.
     */
    reasonType: string;
    /**
     * @description A summary of troubleshooting.
     */
    summary: string;
    /**
     * @description Details on troubleshooting results.
     */
    detail: string;
    /**
     * @description List of recommended actions.
     */
    recommendedActions: Array<TroubleshootingRecommendedActions>;
}
