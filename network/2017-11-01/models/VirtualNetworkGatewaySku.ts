import { VirtualNetworkGatewaySkuName } from '../enums/VirtualNetworkGatewaySkuName';
import { VirtualNetworkGatewaySkuTier } from '../enums/VirtualNetworkGatewaySkuTier';
/**
 * @description VirtualNetworkGatewaySku details
 */
export interface VirtualNetworkGatewaySku {
    /**
     * @description Gateway SKU name.
     */
    name: VirtualNetworkGatewaySkuName | string;
    /**
     * @description Gateway SKU tier.
     */
    tier: VirtualNetworkGatewaySkuTier | string;
    /**
     * @description The capacity.
     */
    capacity: int32;
}
