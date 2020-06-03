import { NatGatewaySkuName } from '../enums/NatGatewaySkuName';

/**
 * @description SKU of nat gateway.
 * @since 2019-07-01
 */
export interface NatGatewaySku {
    /**
     * @description Name of Nat Gateway SKU.
     */
    name: NatGatewaySkuName | string;
}
