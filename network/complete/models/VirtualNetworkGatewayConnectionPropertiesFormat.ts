import { ProvisioningState } from "../enums/ProvisioningState";
import { VirtualNetworkGatewayConnectionProtocol } from "../enums/VirtualNetworkGatewayConnectionProtocol";
import { VirtualNetworkGatewayConnectionStatus } from '../enums/VirtualNetworkGatewayConnectionStatus';
import { VirtualNetworkGatewayConnectionType } from '../enums/VirtualNetworkGatewayConnectionType';
import { IpsecPolicy } from "./IpsecPolicy";
import { LocalNetworkGateway } from './LocalNetworkGateway';
import { SubResource } from './SubResource';
import { TrafficSelectorPolicy } from "./TrafficSelectorPolicy";
import { TunnelConnectionHealth } from './TunnelConnectionHealth';
import { VirtualNetworkGateway } from './VirtualNetworkGateway';

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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the VirtualNetworkGatewayConnection resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
    /** @description Enable policy-based traffic selectors.
     * @since 2017-11-01
     */
    usePolicyBasedTrafficSelectors: boolean;
    /** @description The IPSec Policies to be considered by this connection.
     * @since 2017-11-01
     */
    ipsecPolicies: Array<IpsecPolicy>;
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
    /** @description Use private local Azure IP for the connection.
     * @since 2019-12-01
     */
    useLocalAzureIpAddress: boolean;
    /** @description The dead peer detection timeout of this connection in seconds.
     * @since 2020-04-01
     */
    dpdTimeoutSeconds: int32;
}
