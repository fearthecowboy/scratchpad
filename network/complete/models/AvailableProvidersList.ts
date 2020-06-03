import { AvailableProvidersListCountry } from './AvailableProvidersListCountry';

/**
 * @description List of available countries with details.
 * @since 2017-11-01
 */
export interface AvailableProvidersList {
    /**
     * @description List of available countries.
     */
    countries?: Array<AvailableProvidersListCountry>;
}
