import { EffectiveRoute } from './EffectiveRoute';
/**
 * @description Response for list effective route API service call.
 */
export interface EffectiveRouteListResult {
    /**
     * @description A list of effective routes.
     */
    value: Array<EffectiveRoute>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
