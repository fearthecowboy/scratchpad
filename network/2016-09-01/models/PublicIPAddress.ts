import { Resource } from './Resource';
import { PublicIPAddressPropertiesFormat } from './PublicIPAddressPropertiesFormat';
/**
 * @description Public IP address resource.
 */
export interface PublicIPAddress extends Resource {
    properties: PublicIPAddressPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
