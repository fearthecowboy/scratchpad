import { IpAllocation } from './IpAllocation';
/**
 * @description Response for the ListIpAllocations API service call.
 */
export interface IpAllocationListResult {
    /**
     * @description A list of IpAllocation resources.
     */
    value: Array<IpAllocation>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
