import { NetworkOperationStatus } from '../enums/NetworkOperationStatus';
import { Error } from './Error';
/**
 * @description The response body contains the status of the specified asynchronous operation, indicating whether it has succeeded, is in progress, or has failed. Note that this status is distinct from the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous operation succeeded, the response body includes the HTTP status code for the successful request. If the asynchronous operation failed, the response body includes the HTTP status code for the failed request and error information regarding the failure.
 */
export interface AzureAsyncOperationResult {
    /**
     * @description Status of the Azure async operation. Possible values are: 'InProgress', 'Succeeded', and 'Failed'.
     */
    status: NetworkOperationStatus | string;
    error: Error;
}
