import { SubResource } from './SubResource';
import { VirtualRouterPeeringProperties } from './VirtualRouterPeeringProperties';
/**
 * @description Virtual Router Peering resource.
 */
export interface VirtualRouterPeering extends SubResource {
    /**
     * @description The properties of the Virtual Router Peering.
     */
    properties: VirtualRouterPeeringProperties;
    /**
     * @description Name of the virtual router peering that is unique within a virtual router.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Peering type.
     */
    readonly type: string ;
}
