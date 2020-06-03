import { SubResource } from './SubResource';
/**
 * @description Response for GetConnectionSharedKey API service call.
 */
export interface ConnectionSharedKey extends SubResource {
    /**
     * @description The virtual network connection shared key value.
     */
    value?: string;
}
