import { Resource } from './Resource';
import { ExpressRouteCircuitSku } from './ExpressRouteCircuitSku';
import { ExpressRouteCircuitPropertiesFormat } from './ExpressRouteCircuitPropertiesFormat';
/**
 * @description ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuit extends Resource {
    /**
     * @description The SKU.
     */
    sku: ExpressRouteCircuitSku;
    /**
     * @description Properties of the express route circuit.
     */
    properties: ExpressRouteCircuitPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
