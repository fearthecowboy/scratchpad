import { Operation } from './Operation';
/**
 * @description Result of the request to list Network operations. It contains a list of operations and a URL link to get the next set of results.
 */
export interface OperationListResult {
    /**
     * @description List of Network operations supported by the Network resource provider.
     */
    value: Array<Operation>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     */
    nextLink: string;
}
