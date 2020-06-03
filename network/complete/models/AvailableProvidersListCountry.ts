import { AvailableProvidersListState } from './AvailableProvidersListState';

/**
 * @description Country details.
 * @since 2017-11-01
 */
export interface AvailableProvidersListCountry {
    /**
     * @description The country name.
     */
    countryName: string;
    /**
     * @description A list of Internet service providers.
     */
    providers: Array<string>;
    /**
     * @description List of available states in the country.
     */
    states: Array<AvailableProvidersListState>;
}
