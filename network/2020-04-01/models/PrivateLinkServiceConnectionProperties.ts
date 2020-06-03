import { ProvisioningState } from '../enums/ProvisioningState';
import { PrivateLinkServiceConnectionState } from './PrivateLinkServiceConnectionState';
/**
 * @description Properties of the PrivateLinkServiceConnection.
 */
export interface PrivateLinkServiceConnectionProperties {
    /**
     * @description The provisioning state of the private link service connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The resource id of private link service.
     */
    privateLinkServiceId: string;
    /**
     * @description The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
     */
    groupIds: Array<string>;
    /**
     * @description A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
     */
    requestMessage: string;
    /**
     * @description A collection of read-only information about the state of the connection to the remote resource.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}
