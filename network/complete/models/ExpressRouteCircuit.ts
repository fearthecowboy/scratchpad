import { ExpressRouteCircuitPropertiesFormat } from './ExpressRouteCircuitPropertiesFormat';
import { ExpressRouteCircuitSku } from './ExpressRouteCircuitSku';
import { Resource } from './Resource';

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
     * @Readonly  '2017-11-01' - added readonly
     */
    readonly etag: string;
}
