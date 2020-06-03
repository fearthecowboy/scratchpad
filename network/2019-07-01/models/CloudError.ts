import { CloudErrorBody } from './CloudErrorBody';
/**
 * @description An error response from the Batch service.
 */
export interface CloudError {
    /**
     * @description Cloud error body.
     */
    error: CloudErrorBody;
}
