import { NatGateway } from './NatGateway';
/**
 * @description Response for ListNatGateways API service call.
 */
export interface NatGatewayListResult {
    /**
     * @description A list of Nat Gateways that exists in a resource group.
     */
    value: Array<NatGateway>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
