import { Usage } from './Usage';
/**
 * @description The list usages operation response.
 */
export interface UsagesListResult {
    /**
     * @description The list network resource usages.
     */
    value: Array<Usage>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
