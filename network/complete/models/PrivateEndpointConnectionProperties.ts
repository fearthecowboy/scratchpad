import { ProvisioningState } from '../enums/ProvisioningState';
import { PrivateEndpoint } from './PrivateEndpoint';
import { PrivateLinkServiceConnectionState } from './PrivateLinkServiceConnectionState';

/**
 * @description Properties of the PrivateEndpointConnectProperties.
 * @since 2019-07-01
 */
export interface PrivateEndpointConnectionProperties {
    /**
     * @description The resource of private end point.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly privateEndpoint: PrivateEndpoint;
    /**
     * @description A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
    /**
     * @description The provisioning state of the private endpoint connection resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The consumer link id.
     * @since 2019-12-01
     */
    readonly linkIdentifier: string;
}
