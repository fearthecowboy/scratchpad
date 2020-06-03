import { Resource } from './Resource';
import { IpAllocationPropertiesFormat } from './IpAllocationPropertiesFormat';
/**
 * @description IpAllocation resource.
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
