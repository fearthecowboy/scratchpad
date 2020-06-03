import { ExpressRouteCrossConnectionPeeringProperties } from './ExpressRouteCrossConnectionPeeringProperties';
import { SubResource } from './SubResource';

/**
 * @description Peering in an ExpressRoute Cross Connection resource.
 * @since 2019-07-01
 */
export interface ExpressRouteCrossConnectionPeering extends SubResource {
    /**
     * @description Properties of the express route cross connection peering.
     */
    properties: ExpressRouteCrossConnectionPeeringProperties;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
