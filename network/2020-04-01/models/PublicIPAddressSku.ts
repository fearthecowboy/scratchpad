import { PublicIPAddressSkuName } from '../enums/PublicIPAddressSkuName';
/**
 * @description SKU of a public IP address.
 */
export interface PublicIPAddressSku {
    /**
     * @description Name of a public IP address SKU.
     */
    name: PublicIPAddressSkuName | string;
}
