import { SubResource } from './SubResource';
import { ExpressRouteCrossConnectionPeeringProperties } from './ExpressRouteCrossConnectionPeeringProperties';
/**
 * @description Peering in an ExpressRoute Cross Connection resource.
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
