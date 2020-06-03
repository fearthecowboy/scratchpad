import { SubResource } from './SubResource';
import { VirtualRouterPeeringProperties } from './VirtualRouterPeeringProperties';
/**
 * @description Virtual Router Peering resource
 */
export interface VirtualRouterPeering extends SubResource {
    /**
     * @description The properties of the Virtual Router Peering.
     */
    properties: VirtualRouterPeeringProperties;
    /**
     * @description Gets name of the peering unique to VirtualRouter. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Peering type.
     */
    readonly type: string ;
}
