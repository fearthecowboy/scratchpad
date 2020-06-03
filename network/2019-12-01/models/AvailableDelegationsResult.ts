import { AvailableDelegation } from './AvailableDelegation';
/**
 * @description An array of available delegations.
 */
export interface AvailableDelegationsResult {
    /**
     * @description An array of available delegations.
     */
    value: Array<AvailableDelegation>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
