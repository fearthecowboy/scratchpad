import { IpGroupPropertiesFormat } from './IpGroupPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description The IpGroups resource information.
 * @since 2019-12-01
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
