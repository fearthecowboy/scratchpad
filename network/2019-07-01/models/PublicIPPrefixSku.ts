import { PublicIPPrefixSkuName } from '../enums/PublicIPPrefixSkuName';
/**
 * @description SKU of a public IP prefix.
 */
export interface PublicIPPrefixSku {
    /**
     * @description Name of a public IP prefix SKU.
     */
    name: PublicIPPrefixSkuName | string;
}
