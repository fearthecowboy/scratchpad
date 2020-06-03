import { ExpressRouteCircuitPeeringAdvertisedPublicPrefixState } from '../enums/ExpressRouteCircuitPeeringAdvertisedPublicPrefixState';

/**
 * @description Specifies the peering configuration.
 */
export interface ExpressRouteCircuitPeeringConfig {
    /**
     * @description The reference of AdvertisedPublicPrefixes.
     */
    advertisedPublicPrefixes: Array<string>;
    /**
     * @description AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly advertisedPublicPrefixesState: ExpressRouteCircuitPeeringAdvertisedPublicPrefixState | string;
    /**
     * @description The CustomerASN of the peering.
     */
    customerASN: int32;
    /**
     * @description The RoutingRegistryName of the configuration.
     */
    routingRegistryName: string;
    /** @description The communities of bgp peering. Specified for microsoft peering
     * @since 2017-11-01
     */
    advertisedCommunities: Array<string>;
    /** @description The legacy mode of the peering.
     * @since 2017-11-01
     */
    legacyMode: int32;
}
