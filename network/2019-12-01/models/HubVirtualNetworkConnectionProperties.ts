import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters for HubVirtualNetworkConnection.
 */
export interface HubVirtualNetworkConnectionProperties {
    /**
     * @description Reference to the remote virtual network.
     */
    remoteVirtualNetwork: SubResource;
    /**
     * @description VirtualHub to RemoteVnet transit to enabled or not.
     */
    allowHubToRemoteVnetTransit: boolean;
    /**
     * @description Allow RemoteVnet to use Virtual Hub's gateways.
     */
    allowRemoteVnetToUseHubVnetGateways: boolean;
    /**
     * @description Enable internet security.
     */
    enableInternetSecurity: boolean;
    /**
     * @description The provisioning state of the hub virtual network connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
