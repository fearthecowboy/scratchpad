import { VirtualNetworkGatewayConnectionStatus } from '../enums/VirtualNetworkGatewayConnectionStatus';
/**
 * @description VirtualNetworkGatewayConnection properties
 */
export interface TunnelConnectionHealth {
    /**
     * @description Tunnel name.
     */
    readonly tunnel: string ;
    /**
     * @description Virtual network Gateway connection status
     */
    readonly connectionStatus: VirtualNetworkGatewayConnectionStatus | string;
    /**
     * @description The Ingress Bytes Transferred in this connection
     */
    readonly ingressBytesTransferred: int64;
    /**
     * @description The Egress Bytes Transferred in this connection
     */
    readonly egressBytesTransferred: int64;
    /**
     * @description The time at which connection was established in Utc format.
     */
    readonly lastConnectionEstablishedUtcTime: string ;
}
