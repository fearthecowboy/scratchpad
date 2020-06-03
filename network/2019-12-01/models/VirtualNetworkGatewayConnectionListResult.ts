import { VirtualNetworkGatewayConnection } from './VirtualNetworkGatewayConnection';
/**
 * @description Response for the ListVirtualNetworkGatewayConnections API service call.
 */
export interface VirtualNetworkGatewayConnectionListResult {
    /**
     * @description A list of VirtualNetworkGatewayConnection resources that exists in a resource group.
     */
    value: Array<VirtualNetworkGatewayConnection>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
