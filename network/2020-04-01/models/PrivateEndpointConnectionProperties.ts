import { PrivateEndpoint } from './PrivateEndpoint';
import { PrivateLinkServiceConnectionState } from './PrivateLinkServiceConnectionState';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the PrivateEndpointConnectProperties.
 */
export interface PrivateEndpointConnectionProperties {
    /**
     * @description The resource of private end point.
     */
    readonly privateEndpoint: PrivateEndpoint;
    /**
     * @description A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
    /**
     * @description The provisioning state of the private endpoint connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The consumer link id.
     */
    readonly linkIdentifier: string ;
}
