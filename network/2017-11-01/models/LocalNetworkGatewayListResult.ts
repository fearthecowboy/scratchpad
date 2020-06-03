import { LocalNetworkGateway } from './LocalNetworkGateway';
/**
 * @description Response for ListLocalNetworkGateways API service call.
 */
export interface LocalNetworkGatewayListResult {
    /**
     * @description A list of local network gateways that exists in a resource group.
     */
    value: Array<LocalNetworkGateway>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
