import { ApiError } from './ApiError';

/**
 * @description An error response from the Gallery service.
 * @since 2018-06-01
 */
export interface CloudError {
    error: ApiError;
}
