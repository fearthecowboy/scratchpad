import { CloudErrorBody } from './CloudErrorBody';

/**
 * @description An error response from the Batch service.
 * @since 2019-07-01
 */
export interface CloudError {
    /**
     * @description Cloud error body.
     */
    error: CloudErrorBody;
}
