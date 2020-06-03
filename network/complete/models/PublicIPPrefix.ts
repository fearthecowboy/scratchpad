import { PublicIPPrefixPropertiesFormat } from './PublicIPPrefixPropertiesFormat';
import { PublicIPPrefixSku } from './PublicIPPrefixSku';
import { Resource } from './Resource';

/**
 * @description Public IP prefix resource.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /**
     * @description A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones: Array<string>;
}
