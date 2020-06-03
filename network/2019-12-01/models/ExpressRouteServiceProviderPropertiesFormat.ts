import { ExpressRouteServiceProviderBandwidthsOffered } from './ExpressRouteServiceProviderBandwidthsOffered';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of ExpressRouteServiceProvider.
 */
export interface ExpressRouteServiceProviderPropertiesFormat {
    /**
     * @description A list of peering locations.
     */
    peeringLocations: Array<string>;
    /**
     * @description A list of bandwidths offered.
     */
    bandwidthsOffered: Array<ExpressRouteServiceProviderBandwidthsOffered>;
    /**
     * @description The provisioning state of the express route service provider resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
