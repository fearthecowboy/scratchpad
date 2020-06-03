import { VirtualNetworkGatewaySkuName } from '../enums/VirtualNetworkGatewaySkuName';
import { VirtualNetworkGatewaySkuTier } from '../enums/VirtualNetworkGatewaySkuTier';
/**
 * @description VirtualNetworkGatewaySku details
 */
export interface VirtualNetworkGatewaySku {
    /**
     * @description Gateway SKU name. Possible values are: 'Basic', 'HighPerformance','Standard', and 'UltraPerformance'.
     */
    name?: VirtualNetworkGatewaySkuName | string;
    /**
     * @description Gateway SKU tier. Possible values are: 'Basic', 'HighPerformance','Standard', and 'UltraPerformance'.
     */
    tier?: VirtualNetworkGatewaySkuTier | string;
    /**
     * @description The capacity.
     */
    capacity: int32;
}
