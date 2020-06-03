import { Resource } from './Resource';
import { PublicIPPrefixSku } from './PublicIPPrefixSku';
import { PublicIPPrefixPropertiesFormat } from './PublicIPPrefixPropertiesFormat';
/**
 * @description Public IP prefix resource.
 */
export interface PublicIPPrefix extends Resource {
    /**
     * @description The public IP prefix SKU.
     */
    sku: PublicIPPrefixSku;
    /**
     * @description Public IP prefix properties.
     */
    properties: PublicIPPrefixPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones: Array<string>;
}
