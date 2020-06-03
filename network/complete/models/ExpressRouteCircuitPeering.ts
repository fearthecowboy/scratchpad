import { ExpressRouteCircuitPeeringPropertiesFormat } from './ExpressRouteCircuitPeeringPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Peering in an ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitPeering extends SubResource {
    properties: ExpressRouteCircuitPeeringPropertiesFormat;
    /**
     * @description Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2017-11-01' - added readonly
     */
    readonly etag: string;
    /** @description Type of the resource.
     * @since 2019-07-01
     */
    readonly type: string;
}
