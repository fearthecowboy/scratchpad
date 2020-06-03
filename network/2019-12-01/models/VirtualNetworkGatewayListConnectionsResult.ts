import { VirtualNetworkGatewayConnectionListEntity } from './VirtualNetworkGatewayConnectionListEntity';
/**
 * @description Response for the VirtualNetworkGatewayListConnections API service call.
 */
export interface VirtualNetworkGatewayListConnectionsResult {
    /**
     * @description A list of VirtualNetworkGatewayConnection resources that exists in a resource group.
     */
    value: Array<VirtualNetworkGatewayConnectionListEntity>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
