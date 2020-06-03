import { SubResource } from './SubResource';
import { ExpressRouteCircuitPeeringPropertiesFormat } from './ExpressRouteCircuitPeeringPropertiesFormat';
/**
 * @description Peering in an ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitPeering extends SubResource {
    /**
     * @description Properties of the express route circuit peering.
     */
    properties: ExpressRouteCircuitPeeringPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
