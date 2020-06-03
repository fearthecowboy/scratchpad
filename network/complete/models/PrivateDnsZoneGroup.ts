import { PrivateDnsZoneGroupPropertiesFormat } from './PrivateDnsZoneGroupPropertiesFormat';
import { SubResource } from './SubResource';
/**
 * @description Private dns zone group resource.
 * @since 2020-04-01
 */
export interface PrivateDnsZoneGroup extends SubResource {
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Properties of the private dns zone group.
     */
    properties: PrivateDnsZoneGroupPropertiesFormat;
}
