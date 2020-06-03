import { PublicIPPrefixSkuName } from '../enums/PublicIPPrefixSkuName';

/**
 * @description SKU of a public IP prefix.
 * @since 2019-07-01
 */
export interface PublicIPPrefixSku {
    /**
     * @description Name of a public IP prefix SKU.
     */
    name: PublicIPPrefixSkuName | string;
}
