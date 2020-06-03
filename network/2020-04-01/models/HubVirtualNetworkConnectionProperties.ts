import { SubResource } from './SubResource';
import { RoutingConfiguration } from './RoutingConfiguration';
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
     * @description The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration: RoutingConfiguration;
    /**
     * @description The provisioning state of the hub virtual network connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
