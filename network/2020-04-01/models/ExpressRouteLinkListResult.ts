import { ExpressRouteLink } from './ExpressRouteLink';
/**
 * ExpressRouteLink List Result
 * @description Response for ListExpressRouteLinks API service call.
 */
export interface ExpressRouteLinkListResult {
    /**
     * @description The list of ExpressRouteLink sub-resources.
     */
    value: Array<ExpressRouteLink>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
