import { ComputeOperationValue } from './ComputeOperationValue';
/**
 * @description The List Compute Operation operation response.
 */
export interface ComputeOperationListResult {
    /**
     * @description The list of compute operations
     */
    readonly value: Array<ComputeOperationValue>;
}
