import { ProvisioningState } from "../enums/ProvisioningState";
import { AddressSpace } from './AddressSpace';
import { BgpSettings } from './BgpSettings';

/**
 * @description LocalNetworkGateway properties
 */
export interface LocalNetworkGatewayPropertiesFormat {
    /**
     * @description Local network site address space.
     * @Optional  '2017-11-01' - made property required
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the LocalNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
    /** @description FQDN of local network gateway.
     * @since 2019-12-01
     */
    fqdn: string;
}
