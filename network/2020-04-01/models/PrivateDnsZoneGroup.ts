import { SubResource } from './SubResource';
import { PrivateDnsZoneGroupPropertiesFormat } from './PrivateDnsZoneGroupPropertiesFormat';
/**
 * @description Private dns zone group resource.
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
