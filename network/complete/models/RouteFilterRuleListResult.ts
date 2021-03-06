import { RouteFilterRule } from './RouteFilterRule';

/**
 * @description Response for the ListRouteFilterRules API service call
 * @since 2017-11-01
 */
export interface RouteFilterRuleListResult {
    /**
     * @description Gets a list of RouteFilterRules in a resource group.
     */
    value: Array<RouteFilterRule>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
