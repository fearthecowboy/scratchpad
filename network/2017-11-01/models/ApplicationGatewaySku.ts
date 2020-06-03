import { ApplicationGatewaySkuName } from '../enums/ApplicationGatewaySkuName';
import { ApplicationGatewayTier } from '../enums/ApplicationGatewayTier';
/**
 * @description SKU of an application gateway
 */
export interface ApplicationGatewaySku {
    /**
     * @description Name of an application gateway SKU.
     */
    name: ApplicationGatewaySkuName | string;
    /**
     * @description Tier of an application gateway.
     */
    tier: ApplicationGatewayTier | string;
    /**
     * @description Capacity (instance count) of an application gateway.
     */
    capacity: int32;
}
