import { VirtualNetworkPeering } from './VirtualNetworkPeering';
/**
 * @description Response for ListSubnets API service call. Retrieves all subnets that belong to a virtual network.
 */
export interface VirtualNetworkPeeringListResult {
    /**
     * @description The peerings in a virtual network.
     */
    value: Array<VirtualNetworkPeering>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
