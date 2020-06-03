import { ProvisioningState } from "../enums/ProvisioningState";
import { ServiceProviderProvisioningState } from '../enums/ServiceProviderProvisioningState';
import { ExpressRouteCircuitAuthorization } from './ExpressRouteCircuitAuthorization';
import { ExpressRouteCircuitPeering } from './ExpressRouteCircuitPeering';
import { ExpressRouteCircuitServiceProviderProperties } from './ExpressRouteCircuitServiceProviderProperties';
import { SubResource } from "./SubResource";

/**
 * @description Properties of ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitPropertiesFormat {
    /**
     * @description Allow classic operations
     */
    allowClassicOperations: boolean;
    /**
     * @description The CircuitProvisioningState state of the resource.
     */
    circuitProvisioningState: string;
    /**
     * @description The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
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
     * @description Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The GatewayManager Etag.
     */
    gatewayManagerEtag: string;
    /** @description The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
     * @since 2019-07-01
     */
    expressRoutePort: SubResource;
    /** @description The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
     * @since 2019-07-01
     */
    bandwidthInGbps: double;
    /** @description The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
     * @since 2019-07-01
     */
    readonly stag: int32;
    /** @description Flag denoting Global reach status.
     * @since 2019-07-01
     */
    globalReachEnabled: boolean;
}
