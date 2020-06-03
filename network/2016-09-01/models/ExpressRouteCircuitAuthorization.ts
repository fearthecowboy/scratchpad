import { SubResource } from './SubResource';
import { AuthorizationPropertiesFormat } from './AuthorizationPropertiesFormat';
/**
 * @description Authorization in an ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitAuthorization extends SubResource {
    properties: AuthorizationPropertiesFormat;
    /**
     * @description Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
