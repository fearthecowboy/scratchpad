import { AvailableProvidersListState } from './AvailableProvidersListState';
/**
 * @description Country details.
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
