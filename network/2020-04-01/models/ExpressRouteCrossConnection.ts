import { Resource } from './Resource';
import { ExpressRouteCrossConnectionProperties } from './ExpressRouteCrossConnectionProperties';
/**
 * @description ExpressRouteCrossConnection resource.
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
