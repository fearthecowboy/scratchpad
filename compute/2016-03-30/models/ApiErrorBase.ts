
/**
 * @description Api error base.
 */
export interface ApiErrorBase {
    /**
     * @description The error code.
     */
    code: string;
    /**
     * @description The target of the particular error.
     */
    target: string;
    /**
     * @description The error message.
     */
    message: string;
}
