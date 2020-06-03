import { VirtualNetworkGateway } from './VirtualNetworkGateway';
import { LocalNetworkGateway } from './LocalNetworkGateway';
import { VirtualNetworkGatewayConnectionType } from '../enums/VirtualNetworkGatewayConnectionType';
import { VirtualNetworkGatewayConnectionProtocol } from '../enums/VirtualNetworkGatewayConnectionProtocol';
import { VirtualNetworkGatewayConnectionStatus } from '../enums/VirtualNetworkGatewayConnectionStatus';
import { TunnelConnectionHealth } from './TunnelConnectionHealth';
import { SubResource } from './SubResource';
import { IpsecPolicy } from './IpsecPolicy';
import { TrafficSelectorPolicy } from './TrafficSelectorPolicy';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description VirtualNetworkGatewayConnection properties.
 */
export interface VirtualNetworkGatewayConnectionPropertiesFormat {
    /**
     * @description The authorizationKey.
     */
    authorizationKey: string;
    /**
     * @description The reference to virtual network gateway resource.
     */
    virtualNetworkGateway1?: VirtualNetworkGateway;
    /**
     * @description The reference to virtual network gateway resource.
     */
    virtualNetworkGateway2: VirtualNetworkGateway;
    /**
     * @description The reference to local network gateway resource.
     */
    localNetworkGateway2: LocalNetworkGateway;
    /**
     * @description Gateway connection type.
     */
    connectionType?: VirtualNetworkGatewayConnectionType | string;
    /**
     * @description Connection protocol used for this connection.
     */
    connectionProtocol: VirtualNetworkGatewayConnectionProtocol | string;
    /**
     * @description The routing weight.
     */
    routingWeight: int32;
    /**
     * @description The IPSec shared key.
     */
    sharedKey: string;
    /**
     * @description Virtual Network Gateway connection status.
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
     * @description EnableBgp flag.
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
     * @description The Traffic Selector Policies to be considered by this connection.
     */
    trafficSelectorPolicies: Array<TrafficSelectorPolicy>;
    /**
     * @description The resource GUID property of the virtual network gateway connection resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the virtual network gateway connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description Bypass ExpressRoute Gateway for data forwarding.
     */
    expressRouteGatewayBypass: boolean;
}
