import { SubResource } from './SubResource';
import { InboundNatPoolPropertiesFormat } from './InboundNatPoolPropertiesFormat';
/**
 * @description Inbound NAT pool of the load balancer.
 */
export interface InboundNatPool extends SubResource {
    /**
     * @description Properties of load balancer inbound nat pool.
     */
    properties: InboundNatPoolPropertiesFormat;
    /**
     * @description The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource.
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
