import { Resource } from './Resource';
import { IpGroupPropertiesFormat } from './IpGroupPropertiesFormat';
/**
 * @description The IpGroups resource information.
 */
export interface IpGroup extends Resource {
    /**
     * @description Properties of the IpGroups.
     */
    properties: IpGroupPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
