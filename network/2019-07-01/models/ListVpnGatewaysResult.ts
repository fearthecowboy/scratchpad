import { VpnGateway } from './VpnGateway';
/**
 * @description Result of the request to list VpnGateways. It contains a list of VpnGateways and a URL nextLink to get the next set of results.
 */
export interface ListVpnGatewaysResult {
    /**
     * @description List of VpnGateways.
     */
    value: Array<VpnGateway>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
