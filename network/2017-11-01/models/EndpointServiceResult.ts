import { SubResource } from './SubResource';
/**
 * @description Endpoint service.
 */
export interface EndpointServiceResult extends SubResource {
    /**
     * @description Name of the endpoint service.
     */
    readonly name: string ;
    /**
     * @description Type of the endpoint service.
     */
    readonly type: string ;
}
