import { SubResource } from './SubResource';
import { InboundNatPoolPropertiesFormat } from './InboundNatPoolPropertiesFormat';
/**
 * @description Inbound NAT pool of the load balancer.
 */
export interface InboundNatPool extends SubResource {
    properties: InboundNatPoolPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
