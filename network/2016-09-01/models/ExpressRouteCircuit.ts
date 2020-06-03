import { Resource } from './Resource';
import { ExpressRouteCircuitSku } from './ExpressRouteCircuitSku';
import { ExpressRouteCircuitPropertiesFormat } from './ExpressRouteCircuitPropertiesFormat';
/**
 * @description ExpressRouteCircuit resource
 */
export interface ExpressRouteCircuit extends Resource {
    /**
     * @description The SKU.
     */
    sku: ExpressRouteCircuitSku;
    properties: ExpressRouteCircuitPropertiesFormat;
    /**
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
