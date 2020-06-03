
/**
 * @description An error response from the Batch service.
 */
export interface CloudErrorBody {
    /**
     * @description An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
     */
    code: string;
    /**
     * @description A message describing the error, intended to be suitable for display in a user interface.
     */
    message: string;
    /**
     * @description The target of the particular error. For example, the name of the property in error.
     */
    target: string;
    /**
     * @description A list of additional details about the error.
     */
    details: Array<CloudErrorBody>;
}
