import { ProvisioningState } from '../enums/ProvisioningState';
import { ServiceProviderProvisioningState } from '../enums/ServiceProviderProvisioningState';
import { ExpressRouteCircuitReference } from './ExpressRouteCircuitReference';
import { ExpressRouteCrossConnectionPeering } from './ExpressRouteCrossConnectionPeering';

/**
 * @description Properties of ExpressRouteCrossConnection.
 * @since 2019-07-01
 */
export interface ExpressRouteCrossConnectionProperties {
    /**
     * @description The name of the primary port.
     */
    readonly primaryAzurePort: string ;
    /**
     * @description The name of the secondary port.
     */
    readonly secondaryAzurePort: string ;
    /**
     * @description The identifier of the circuit traffic.
     */
    readonly sTag: int64;
    /**
     * @description The peering location of the ExpressRoute circuit.
     */
    peeringLocation: string;
    /**
     * @description The circuit bandwidth In Mbps.
     */
    bandwidthInMbps: int32;
    /**
     * @description The ExpressRouteCircuit.
     */
    expressRouteCircuit: ExpressRouteCircuitReference;
    /**
     * @description The provisioning state of the circuit in the connectivity provider system.
     */
    serviceProviderProvisioningState: ServiceProviderProvisioningState | string;
    /**
     * @description Additional read only notes set by the connectivity provider.
     */
    serviceProviderNotes: string;
    /**
     * @description The provisioning state of the express route cross connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The list of peerings.
     */
    peerings: Array<ExpressRouteCrossConnectionPeering>;
}
