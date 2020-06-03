import { VirtualNetworkGatewayConnectionListEntity } from './VirtualNetworkGatewayConnectionListEntity';

/**
 * @description Response for the VirtualNetworkGatewayListConnections API service call
 * @since 2017-11-01
 */
export interface VirtualNetworkGatewayListConnectionsResult {
    /**
     * @description Gets a list of VirtualNetworkGatewayConnection resources that exists in a resource group.
     */
    value: Array<VirtualNetworkGatewayConnectionListEntity>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
