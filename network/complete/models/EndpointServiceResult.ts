import { SubResource } from './SubResource';

/**
 * @description Endpoint service.
 * @since 2017-11-01
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
