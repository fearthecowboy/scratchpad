import { Resource } from './Resource';
import { PublicIPAddressSku } from './PublicIPAddressSku';
import { PublicIPAddressPropertiesFormat } from './PublicIPAddressPropertiesFormat';
/**
 * @description Public IP address resource.
 */
export interface PublicIPAddress extends Resource {
    /**
     * @description The public IP address SKU.
     */
    sku: PublicIPAddressSku;
    /**
     * @description Public IP address properties.
     */
    properties: PublicIPAddressPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones: Array<string>;
}
