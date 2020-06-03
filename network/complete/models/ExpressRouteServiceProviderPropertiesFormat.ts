import { ProvisioningState } from "../enums/ProvisioningState";
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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
