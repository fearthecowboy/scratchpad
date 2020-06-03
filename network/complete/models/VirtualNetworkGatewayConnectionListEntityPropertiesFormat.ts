import { ProvisioningState } from "../enums/ProvisioningState";
import { VirtualNetworkGatewayConnectionProtocol } from "../enums/VirtualNetworkGatewayConnectionProtocol";
import { VirtualNetworkGatewayConnectionStatus } from '../enums/VirtualNetworkGatewayConnectionStatus';
import { VirtualNetworkGatewayConnectionType } from '../enums/VirtualNetworkGatewayConnectionType';
import { IpsecPolicy } from './IpsecPolicy';
import { SubResource } from './SubResource';
import { TrafficSelectorPolicy } from "./TrafficSelectorPolicy";
import { TunnelConnectionHealth } from './TunnelConnectionHealth';
import { VirtualNetworkConnectionGatewayReference } from "./VirtualNetworkConnectionGatewayReference";

/**
 * @description VirtualNetworkGatewayConnection properties
 * @since 2017-11-01
 */
export interface VirtualNetworkGatewayConnectionListEntityPropertiesFormat {
    /**
     * @description The authorizationKey.
     */
    authorizationKey: string;
    /**
     * @description The reference to virtual network gateway resource.
     * @Type  '2019-07-01' - type changed from 'virtualNetworkConnectionGatewayReference' to 'VirtualNetworkConnectionGatewayReference'
     */
    virtualNetworkGateway1?: VirtualNetworkConnectionGatewayReference;
    /**
     * @description The reference to virtual network gateway resource.
     * @Type  '2019-07-01' - type changed from 'virtualNetworkConnectionGatewayReference' to 'VirtualNetworkConnectionGatewayReference'
     */
    virtualNetworkGateway2: VirtualNetworkConnectionGatewayReference;
    /**
     * @description The reference to local network gateway resource.
     * @Type  '2019-07-01' - type changed from 'virtualNetworkConnectionGatewayReference' to 'VirtualNetworkConnectionGatewayReference'
     */
    localNetworkGateway2: VirtualNetworkConnectionGatewayReference;
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
     * @description Enable policy-based traffic selectors.
     */
    usePolicyBasedTrafficSelectors: boolean;
    /**
     * @description The IPSec Policies to be considered by this connection.
     */
    ipsecPolicies: Array<IpsecPolicy>;
    /**
     * @description The resource GUID property of the VirtualNetworkGatewayConnection resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the VirtualNetworkGatewayConnection resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
    /** @description Connection protocol used for this connection.
     * @since 2019-07-01
     */
    connectionProtocol: VirtualNetworkGatewayConnectionProtocol | string;
    /** @description The Traffic Selector Policies to be considered by this connection.
     * @since 2019-07-01
     */
    trafficSelectorPolicies: Array<TrafficSelectorPolicy>;
    /** @description Bypass ExpressRoute Gateway for data forwarding.
     * @since 2019-07-01
     */
    expressRouteGatewayBypass: boolean;
}
