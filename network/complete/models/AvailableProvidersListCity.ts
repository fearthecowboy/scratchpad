
/**
 * @description City or town details.
 * @since 2017-11-01
 */
export interface AvailableProvidersListCity {
    /**
     * @description The city or town name.
     */
    cityName: string;
    /**
     * @description A list of Internet service providers.
     */
    providers: Array<string>;
}
