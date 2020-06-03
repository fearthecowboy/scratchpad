import { AvailableDelegation } from './AvailableDelegation';

/**
 * @description An array of available delegations.
 * @since 2019-07-01
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
