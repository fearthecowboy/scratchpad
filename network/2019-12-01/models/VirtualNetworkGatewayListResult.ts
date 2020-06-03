import { VirtualNetworkGateway } from './VirtualNetworkGateway';
/**
 * @description Response for the ListVirtualNetworkGateways API service call.
 */
export interface VirtualNetworkGatewayListResult {
    /**
     * @description A list of VirtualNetworkGateway resources that exists in a resource group.
     */
    value: Array<VirtualNetworkGateway>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
