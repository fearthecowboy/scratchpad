import { VirtualNetworkGatewayConnection } from './VirtualNetworkGatewayConnection';

/**
 * @description Response for the ListVirtualNetworkGatewayConnections API service call
 */
export interface VirtualNetworkGatewayConnectionListResult {
    /**
     * @description Gets a list of VirtualNetworkGatewayConnection resources that exists in a resource group.
     */
    value: Array<VirtualNetworkGatewayConnection>;
    /**
     * @description The URL to get the next set of results.
     * @Readonly  '2017-11-01' - added readonly
     */
    readonly nextLink: string;
}
