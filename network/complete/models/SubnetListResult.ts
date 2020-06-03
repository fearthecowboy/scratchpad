import { Subnet } from './Subnet';

/**
 * @description Response for ListSubnets API service callRetrieves all subnet that belongs to a virtual network
 */
export interface SubnetListResult {
    /**
     * @description The subnets in a virtual network.
     */
    value: Array<Subnet>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
