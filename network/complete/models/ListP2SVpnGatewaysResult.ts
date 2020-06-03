import { P2SVpnGateway } from './P2SVpnGateway';

/**
 * @description Result of the request to list P2SVpnGateways. It contains a list of P2SVpnGateways and a URL nextLink to get the next set of results.
 * @since 2019-07-01
 */
export interface ListP2SVpnGatewaysResult {
    /**
     * @description List of P2SVpnGateways.
     */
    value: Array<P2SVpnGateway>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
