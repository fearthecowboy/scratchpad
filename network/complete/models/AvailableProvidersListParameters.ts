
/**
 * @description Constraints that determine the list of available Internet service providers.
 * @since 2017-11-01
 */
export interface AvailableProvidersListParameters {
    /**
     * @description A list of Azure regions.
     */
    azureLocations: Array<string>;
    /**
     * @description The country for available providers list.
     */
    country: string;
    /**
     * @description The state for available providers list.
     */
    state: string;
    /**
     * @description The city or town for available providers list.
     */
    city: string;
}
