import { ExpressRoutePortsLocationBandwidths } from './ExpressRoutePortsLocationBandwidths';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * ExpressRoutePorts Location Properties
 * @description Properties specific to ExpressRoutePorts peering location resources.
 */
export interface ExpressRoutePortsLocationPropertiesFormat {
    /**
     * @description Address of peering location.
     */
    readonly address: string ;
    /**
     * @description Contact details of peering locations.
     */
    readonly contact: string ;
    /**
     * @description The inventory of available ExpressRoutePort bandwidths.
     */
    availableBandwidths: Array<ExpressRoutePortsLocationBandwidths>;
    /**
     * @description The provisioning state of the express route port location resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
