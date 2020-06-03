import { ApplicationGatewaySkuName } from '../enums/ApplicationGatewaySkuName';
import { ApplicationGatewayTier } from '../enums/ApplicationGatewayTier';

/**
 * @description SKU of an application gateway
 */
export interface ApplicationGatewaySku {
    /**
     * @description Name of an application gateway SKU. Possible values are: 'Standard_Small', 'Standard_Medium', 'Standard_Large', 'WAF_Medium', and 'WAF_Large'.
     */
    name: ApplicationGatewaySkuName | string;
    /**
     * @description Tier of an application gateway. Possible values are: 'Standard' and 'WAF'.
     */
    tier: ApplicationGatewayTier | string;
    /**
     * @description Capacity (instance count) of an application gateway.
     */
    capacity: int32;
}
