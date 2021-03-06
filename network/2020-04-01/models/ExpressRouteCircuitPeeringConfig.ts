import { ExpressRouteCircuitPeeringAdvertisedPublicPrefixState } from '../enums/ExpressRouteCircuitPeeringAdvertisedPublicPrefixState';
/**
 * @description Specifies the peering configuration.
 */
export interface ExpressRouteCircuitPeeringConfig {
    /**
     * @description The reference to AdvertisedPublicPrefixes.
     */
    advertisedPublicPrefixes: Array<string>;
    /**
     * @description The communities of bgp peering. Specified for microsoft peering.
     */
    advertisedCommunities: Array<string>;
    /**
     * @description The advertised public prefix state of the Peering resource.
     */
    readonly advertisedPublicPrefixesState: ExpressRouteCircuitPeeringAdvertisedPublicPrefixState | string;
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
