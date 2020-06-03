import { PublicIPAddressSkuName } from '../enums/PublicIPAddressSkuName';

/**
 * @description SKU of a public IP address
 * @since 2017-11-01
 */
export interface PublicIPAddressSku {
    /**
     * @description Name of a public IP address SKU.
     */
    name: PublicIPAddressSkuName | string;
}
