import { NatGatewaySkuName } from '../enums/NatGatewaySkuName';
/**
 * @description SKU of nat gateway.
 */
export interface NatGatewaySku {
    /**
     * @description Name of Nat Gateway SKU.
     */
    name: NatGatewaySkuName | string;
}
