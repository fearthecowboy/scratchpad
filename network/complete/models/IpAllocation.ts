import { IpAllocationPropertiesFormat } from './IpAllocationPropertiesFormat';
import { Resource } from './Resource';
/**
 * @description IpAllocation resource.
 * @since 2020-04-01
 */
export interface IpAllocation extends Resource {
    /**
     * @description Properties of the IpAllocation.
     */
    properties: IpAllocationPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
