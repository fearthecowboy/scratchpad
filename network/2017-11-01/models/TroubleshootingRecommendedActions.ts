
/**
 * @description Recommended actions based on discovered issues.
 */
export interface TroubleshootingRecommendedActions {
    /**
     * @description ID of the recommended action.
     */
    actionId: string;
    /**
     * @description Description of recommended actions.
     */
    actionText: string;
    /**
     * @description The uri linking to a documentation for the recommended troubleshooting actions.
     */
    actionUri: string;
    /**
     * @description The information from the URI for the recommended troubleshooting actions.
     */
    actionUriText: string;
}
