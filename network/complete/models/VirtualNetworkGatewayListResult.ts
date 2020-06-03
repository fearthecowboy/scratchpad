import { VirtualNetworkGateway } from './VirtualNetworkGateway';

/**
 * @description Response for the ListVirtualNetworkGateways API service call.
 */
export interface VirtualNetworkGatewayListResult {
    /**
     * @description Gets a list of VirtualNetworkGateway resources that exists in a resource group.
     */
    value: Array<VirtualNetworkGateway>;
    /**
     * @description The URL to get the next set of results.
     * @Readonly  '2017-11-01' - added readonly
     */
    readonly nextLink: string;
}
