import { AvailableProvidersListCity } from './AvailableProvidersListCity';

/**
 * @description State details.
 * @since 2017-11-01
 */
export interface AvailableProvidersListState {
    /**
     * @description The state name.
     */
    stateName: string;
    /**
     * @description A list of Internet service providers.
     */
    providers: Array<string>;
    /**
     * @description List of available cities or towns in the state.
     */
    cities: Array<AvailableProvidersListCity>;
}
