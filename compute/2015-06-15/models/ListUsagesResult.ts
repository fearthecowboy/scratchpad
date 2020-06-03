import { Usage } from './Usage';
/**
 * @description The List Usages operation response.
 */
export interface ListUsagesResult {
    /**
     * @description The list of compute resource usages.
     */
    value: Array<Usage>;
    /**
     * @description The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information.
     */
    nextLink: string;
}
