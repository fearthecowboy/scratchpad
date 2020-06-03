import { NetworkProfilePropertiesFormat } from './NetworkProfilePropertiesFormat';
import { Resource } from './Resource';

/**
 * @description Network profile resource.
 * @since 2019-07-01
 */
export interface NetworkProfile extends Resource {
    /**
     * @description Network profile properties.
     */
    properties: NetworkProfilePropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
