import { ExpressRouteServiceProviderBandwidthsOffered } from './ExpressRouteServiceProviderBandwidthsOffered';
/**
 * @description Properties of ExpressRouteServiceProvider.
 */
export interface ExpressRouteServiceProviderPropertiesFormat {
    /**
     * @description Get a list of peering locations.
     */
    peeringLocations: Array<string>;
    /**
     * @description Gets bandwidths offered.
     */
    bandwidthsOffered: Array<ExpressRouteServiceProviderBandwidthsOffered>;
    /**
     * @description Gets the provisioning state of the resource.
     */
    provisioningState: string;
}
