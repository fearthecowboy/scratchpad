import { Subnet } from './Subnet';
import { NetworkInterface } from './NetworkInterface';
import { ProvisioningState } from '../enums/ProvisioningState';
import { PrivateLinkServiceConnection } from './PrivateLinkServiceConnection';
/**
 * @description Properties of the private endpoint.
 */
export interface PrivateEndpointProperties {
    /**
     * @description The ID of the subnet from which the private IP will be allocated.
     */
    subnet: Subnet;
    /**
     * @description An array of references to the network interfaces created for this private endpoint.
     */
    readonly networkInterfaces: Array<NetworkInterface>;
    /**
     * @description The provisioning state of the private endpoint resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description A grouping of information about the connection to the remote resource.
     */
    privateLinkServiceConnections: Array<PrivateLinkServiceConnection>;
    /**
     * @description A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
     */
    manualPrivateLinkServiceConnections: Array<PrivateLinkServiceConnection>;
}
