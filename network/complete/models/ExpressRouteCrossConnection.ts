import { ExpressRouteCrossConnectionProperties } from './ExpressRouteCrossConnectionProperties';
import { Resource } from './Resource';

/**
 * @description ExpressRouteCrossConnection resource.
 * @since 2019-07-01
 */
export interface ExpressRouteCrossConnection extends Resource {
    /**
     * @description Properties of the express route cross connection.
     */
    properties: ExpressRouteCrossConnectionProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
