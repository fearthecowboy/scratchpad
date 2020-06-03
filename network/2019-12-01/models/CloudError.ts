import { CloudErrorBody } from './CloudErrorBody';
/**
 * @description An error response from the service.
 */
export interface CloudError {
    /**
     * @description Cloud error body.
     */
    error: CloudErrorBody;
}
