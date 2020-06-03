import { ApiError } from './ApiError';
/**
 * @description An error response from the Gallery service.
 */
export interface CloudError {
    error: ApiError;
}
