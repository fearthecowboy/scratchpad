import { ServiceProviderProvisioningState } from '../enums/ServiceProviderProvisioningState';
import { ExpressRouteCircuitAuthorization } from './ExpressRouteCircuitAuthorization';
import { ExpressRouteCircuitPeering } from './ExpressRouteCircuitPeering';
import { ExpressRouteCircuitServiceProviderProperties } from './ExpressRouteCircuitServiceProviderProperties';
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
     */
    provisioningState: string;
    /**
     * @description The GatewayManager Etag.
     */
    gatewayManagerEtag: string;
}
