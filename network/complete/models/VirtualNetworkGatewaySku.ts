import { VirtualNetworkGatewaySkuName } from '../enums/VirtualNetworkGatewaySkuName';
import { VirtualNetworkGatewaySkuTier } from '../enums/VirtualNetworkGatewaySkuTier';

/**
 * @description VirtualNetworkGatewaySku details
 */
export interface VirtualNetworkGatewaySku {
    /**
     * @description Gateway SKU name. Possible values are: 'Basic', 'HighPerformance','Standard', and 'UltraPerformance'.
     * @Optional  '2017-11-01' - made property required
     */
    name: VirtualNetworkGatewaySkuName | string;
    /**
     * @description Gateway SKU tier. Possible values are: 'Basic', 'HighPerformance','Standard', and 'UltraPerformance'.
     * @Optional  '2017-11-01' - made property required
     */
    tier: VirtualNetworkGatewaySkuTier | string;
    /**
     * @description The capacity.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly capacity: int32;
}
