import { ProvisioningState } from '../enums/ProvisioningState';
import { CustomDnsConfigPropertiesFormat } from "./CustomDnsConfigPropertiesFormat";
import { NetworkInterface } from './NetworkInterface';
import { PrivateLinkServiceConnection } from './PrivateLinkServiceConnection';
import { Subnet } from './Subnet';

/**
 * @description Properties of the private endpoint.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
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
    /** @description An array of custom dns configurations.
     * @since 2020-04-01
     */
    customDnsConfigs: Array<CustomDnsConfigPropertiesFormat>;
}
