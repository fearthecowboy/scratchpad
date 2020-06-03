import { RouteFilterRule } from './RouteFilterRule';
/**
 * @description Response for the ListRouteFilterRules API service call.
 */
export interface RouteFilterRuleListResult {
    /**
     * @description A list of RouteFilterRules in a resource group.
     */
    value: Array<RouteFilterRule>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
