
/**
 * @description Parameters that define a geographic location.
 */
export interface AzureReachabilityReportLocation {
    /**
     * @description The name of the country.
     */
    country?: string;
    /**
     * @description The name of the state.
     */
    state: string;
    /**
     * @description The name of the city or town.
     */
    city: string;
}
