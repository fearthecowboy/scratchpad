import { ExpressRouteCircuitSkuTier } from '../enums/ExpressRouteCircuitSkuTier';
import { ExpressRouteCircuitSkuFamily } from '../enums/ExpressRouteCircuitSkuFamily';
/**
 * @description Contains SKU in an ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitSku {
    /**
     * @description The name of the SKU.
     */
    name: string;
    /**
     * @description The tier of the SKU. Possible values are 'Standard' and 'Premium'.
     */
    tier: ExpressRouteCircuitSkuTier | string;
    /**
     * @description The family of the SKU. Possible values are: 'UnlimitedData' and 'MeteredData'.
     */
    family: ExpressRouteCircuitSkuFamily | string;
}
