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
     * @description The communities of bgp peering. Specified for microsoft peering
     */
    advertisedCommunities: Array<string>;
    /**
     * @description AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
     */
    advertisedPublicPrefixesState: ExpressRouteCircuitPeeringAdvertisedPublicPrefixState | string;
    /**
     * @description The legacy mode of the peering.
     */
    legacyMode: int32;
    /**
     * @description The CustomerASN of the peering.
     */
    customerASN: int32;
    /**
     * @description The RoutingRegistryName of the configuration.
     */
    routingRegistryName: string;
}
