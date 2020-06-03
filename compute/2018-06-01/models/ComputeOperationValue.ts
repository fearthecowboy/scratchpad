import { ComputeOperationValueDisplay } from './ComputeOperationValueDisplay';
/**
 * @description Describes the properties of a Compute Operation value.
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
