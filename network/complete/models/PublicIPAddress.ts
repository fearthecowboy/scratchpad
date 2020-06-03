import { PublicIPAddressPropertiesFormat } from './PublicIPAddressPropertiesFormat';
import { PublicIPAddressSku } from "./PublicIPAddressSku";
import { Resource } from './Resource';

/**
 * @description Public IP address resource.
 */
export interface PublicIPAddress extends Resource {
    properties: PublicIPAddressPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /** @description The public IP address SKU.
     * @since 2017-11-01
     */
    sku: PublicIPAddressSku;
    /** @description A list of availability zones denoting the IP allocated for the resource needs to come from.
     * @since 2017-11-01
     */
    zones: Array<string>;
}
