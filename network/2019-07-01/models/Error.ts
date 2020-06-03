import { ErrorDetails } from './ErrorDetails';
/**
 * @description Common error representation.
 */
export interface Error {
    /**
     * @description Error code.
     */
    code: string;
    /**
     * @description Error message.
     */
    message: string;
    /**
     * @description Error target.
     */
    target: string;
    /**
     * @description Error details.
     */
    details: Array<ErrorDetails>;
    /**
     * @description Inner error message.
     */
    innerError: string;
}
