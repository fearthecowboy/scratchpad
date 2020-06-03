import { ApiErrorBase } from './ApiErrorBase';
import { InnerError } from './InnerError';
/**
 * @description Api error.
 */
export interface ApiError {
    /**
     * @description The Api error details
     */
    details: Array<ApiErrorBase>;
    /**
     * @description The Api inner error
     */
    innererror: InnerError;
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
