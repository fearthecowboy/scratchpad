import { AddressSpace } from './AddressSpace';
import { BgpSettings } from './BgpSettings';
/**
 * @description LocalNetworkGateway properties
 */
export interface LocalNetworkGatewayPropertiesFormat {
    /**
     * @description Local network site address space.
     */
    localNetworkAddressSpace: AddressSpace;
    /**
     * @description IP address of local network gateway.
     */
    gatewayIpAddress: string;
    /**
     * @description Local network gateway's BGP speaker settings.
     */
    bgpSettings: BgpSettings;
    /**
     * @description The resource GUID property of the LocalNetworkGateway resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the LocalNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string ;
}
