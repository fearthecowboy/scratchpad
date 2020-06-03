import { ProvisioningState } from '../enums/ProvisioningState';
import { RoutingConfiguration } from "./RoutingConfiguration";
import { SubResource } from './SubResource';

/**
 * @description Parameters for HubVirtualNetworkConnection.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The Routing Configuration indicating the associated and propagated route tables on this connection.
     * @since 2020-04-01
     */
    routingConfiguration: RoutingConfiguration;
}
