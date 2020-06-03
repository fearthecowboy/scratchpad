import { Resource } from './Resource';
import { NetworkProfilePropertiesFormat } from './NetworkProfilePropertiesFormat';
/**
 * @description Network profile resource.
 */
export interface NetworkProfile extends Resource {
    /**
     * @description Network profile properties.
     */
    properties: NetworkProfilePropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
