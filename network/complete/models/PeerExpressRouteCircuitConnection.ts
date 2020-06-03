import { PeerExpressRouteCircuitConnectionPropertiesFormat } from './PeerExpressRouteCircuitConnectionPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
 * @since 2019-07-01
 */
export interface PeerExpressRouteCircuitConnection extends SubResource {
    /**
     * @description Properties of the peer express route circuit connection.
     */
    properties: PeerExpressRouteCircuitConnectionPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
