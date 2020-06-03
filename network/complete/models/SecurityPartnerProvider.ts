import { Resource } from './Resource';
import { SecurityPartnerProviderPropertiesFormat } from './SecurityPartnerProviderPropertiesFormat';
/**
 * @description Security Partner Provider resource.
 * @since 2020-04-01
 */
export interface SecurityPartnerProvider extends Resource {
    /**
     * @description Properties of the Security Partner Provider.
     */
    properties: SecurityPartnerProviderPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
