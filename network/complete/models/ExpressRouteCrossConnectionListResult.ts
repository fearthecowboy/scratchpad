import { ExpressRouteCrossConnection } from './ExpressRouteCrossConnection';

/**
 * @description Response for ListExpressRouteCrossConnection API service call.
 * @since 2019-07-01
 */
export interface ExpressRouteCrossConnectionListResult {
    /**
     * @description A list of ExpressRouteCrossConnection resources.
     */
    value: Array<ExpressRouteCrossConnection>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
