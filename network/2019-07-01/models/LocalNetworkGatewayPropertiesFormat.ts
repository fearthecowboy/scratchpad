import { AddressSpace } from './AddressSpace';
import { BgpSettings } from './BgpSettings';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description LocalNetworkGateway properties.
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
     * @description The resource GUID property of the local network gateway resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the local network gateway resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
