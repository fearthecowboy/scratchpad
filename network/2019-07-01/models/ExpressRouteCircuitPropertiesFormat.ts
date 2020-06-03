import { ServiceProviderProvisioningState } from '../enums/ServiceProviderProvisioningState';
import { ExpressRouteCircuitAuthorization } from './ExpressRouteCircuitAuthorization';
import { ExpressRouteCircuitPeering } from './ExpressRouteCircuitPeering';
import { ExpressRouteCircuitServiceProviderProperties } from './ExpressRouteCircuitServiceProviderProperties';
import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitPropertiesFormat {
    /**
     * @description Allow classic operations.
     */
    allowClassicOperations: boolean;
    /**
     * @description The CircuitProvisioningState state of the resource.
     */
    circuitProvisioningState: string;
    /**
     * @description The ServiceProviderProvisioningState state of the resource.
     */
    serviceProviderProvisioningState: ServiceProviderProvisioningState | string;
    /**
     * @description The list of authorizations.
     */
    authorizations: Array<ExpressRouteCircuitAuthorization>;
    /**
     * @description The list of peerings.
     */
    peerings: Array<ExpressRouteCircuitPeering>;
    /**
     * @description The ServiceKey.
     */
    serviceKey: string;
    /**
     * @description The ServiceProviderNotes.
     */
    serviceProviderNotes: string;
    /**
     * @description The ServiceProviderProperties.
     */
    serviceProviderProperties: ExpressRouteCircuitServiceProviderProperties;
    /**
     * @description The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
     */
    expressRoutePort: SubResource;
    /**
     * @description The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
     */
    bandwidthInGbps: double;
    /**
     * @description The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
     */
    readonly stag: int32;
    /**
     * @description The provisioning state of the express route circuit resource.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description The GatewayManager Etag.
     */
    gatewayManagerEtag: string;
    /**
     * @description Flag denoting Global reach status.
     */
    globalReachEnabled: boolean;
}
