import { ApiError } from './ApiError';
/**
 * @description Operation status response
 */
export interface OperationStatusResponse {
    /**
     * @description Operation ID
     */
    readonly name: string ;
    /**
     * @description Operation status
     */
    readonly status: string ;
    /**
     * @description Start time of the operation
     */
    readonly startTime: dateTime ;
    /**
     * @description End time of the operation
     */
    readonly endTime: dateTime ;
    /**
     * @description Api error
     */
    readonly error: ApiError;
}
