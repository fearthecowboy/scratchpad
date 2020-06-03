
/**
 * @description Parameters that define a geographic location.
 * @since 2017-11-01
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
