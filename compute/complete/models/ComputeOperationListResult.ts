import { ComputeOperationValue } from './ComputeOperationValue';

/**
 * @description The List Compute Operation operation response.
 * @since 2018-06-01
 */
export interface ComputeOperationListResult {
    /**
     * @description The list of compute operations
     */
    readonly value: Array<ComputeOperationValue>;
}
