import { VirtualNetworkGateway } from './VirtualNetworkGateway';
import { LocalNetworkGateway } from './LocalNetworkGateway';
import { VirtualNetworkGatewayConnectionType } from '../enums/VirtualNetworkGatewayConnectionType';
import { VirtualNetworkGatewayConnectionStatus } from '../enums/VirtualNetworkGatewayConnectionStatus';
import { TunnelConnectionHealth } from './TunnelConnectionHealth';
import { SubResource } from './SubResource';
/**
 * @description VirtualNetworkGatewayConnection properties
 */
export interface VirtualNetworkGatewayConnectionPropertiesFormat {
    /**
     * @description The authorizationKey.
     */
    authorizationKey: string;
    virtualNetworkGateway1?: VirtualNetworkGateway;
    virtualNetworkGateway2: VirtualNetworkGateway;
    localNetworkGateway2: LocalNetworkGateway;
    /**
     * @description Gateway connection type. Possible values are: 'IPsec','Vnet2Vnet','ExpressRoute', and 'VPNClient.
     */
    connectionType?: VirtualNetworkGatewayConnectionType | string;
    /**
     * @description The routing weight.
     */
    routingWeight: int32;
    /**
     * @description The IPSec shared key.
     */
    sharedKey: string;
    /**
     * @description Virtual network Gateway connection status. Possible values are 'Unknown', 'Connecting', 'Connected' and 'NotConnected'.
     */
    readonly connectionStatus: VirtualNetworkGatewayConnectionStatus | string;
    /**
     * @description Collection of all tunnels' connection health status.
     */
    readonly tunnelConnectionStatus: Array<TunnelConnectionHealth>;
    /**
     * @description The egress bytes transferred in this connection.
     */
    readonly egressBytesTransferred: int64;
    /**
     * @description The ingress bytes transferred in this connection.
     */
    readonly ingressBytesTransferred: int64;
    /**
     * @description The reference to peerings resource.
     */
    peer: SubResource;
    /**
     * @description EnableBgp flag
     */
    enableBgp: boolean;
    /**
     * @description The resource GUID property of the VirtualNetworkGatewayConnection resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the VirtualNetworkGatewayConnection resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string ;
}
