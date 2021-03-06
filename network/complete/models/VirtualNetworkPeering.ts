import { SubResource } from './SubResource';
import { VirtualNetworkPeeringPropertiesFormat } from './VirtualNetworkPeeringPropertiesFormat';

/**
 * @description Peerings in a virtual network resource.
 */
export interface VirtualNetworkPeering extends SubResource {
    properties: VirtualNetworkPeeringPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
