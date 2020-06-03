import { ExpressRouteCrossConnectionRoutesTableSummary } from './ExpressRouteCrossConnectionRoutesTableSummary';
/**
 * @description Response for ListRoutesTable associated with the Express Route Cross Connections.
 */
export interface ExpressRouteCrossConnectionsRoutesTableSummaryListResult {
    /**
     * @description A list of the routes table.
     */
    value: Array<ExpressRouteCrossConnectionRoutesTableSummary>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
