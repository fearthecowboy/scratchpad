import { ComputeOperationValueDisplay } from './ComputeOperationValueDisplay';

/**
 * @description Describes the properties of a Compute Operation value.
 * @since 2018-06-01
 */
export interface ComputeOperationValue {
    /**
     * @description The origin of the compute operation.
     */
    readonly origin: string ;
    /**
     * @description The name of the compute operation.
     */
    readonly name: string ;
    display: ComputeOperationValueDisplay;
}
