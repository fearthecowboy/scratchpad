
/**
 * @description Describes the properties of a Compute Operation Value Display.
 */
export interface ComputeOperationValueDisplay {
    /**
     * @description The display name of the compute operation.
     */
    readonly operation: string ;
    /**
     * @description The display name of the resource the operation applies to.
     */
    readonly resource: string ;
    /**
     * @description The description of the operation.
     */
    readonly description: string ;
    /**
     * @description The resource provider for the operation.
     */
    readonly provider: string ;
}
