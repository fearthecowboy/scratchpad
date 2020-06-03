import { FlowLog } from './FlowLog';

/**
 * @description List of flow logs.
 * @since 2019-12-01
 */
export interface FlowLogListResult {
    /**
     * @description Information about flow log resource.
     */
    value: Array<FlowLog>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
