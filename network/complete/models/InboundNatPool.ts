import { InboundNatPoolPropertiesFormat } from './InboundNatPoolPropertiesFormat';
import { SubResource } from './SubResource';

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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /** @description Type of the resource.
     * @since 2019-07-01
     */
    readonly type: string;
}
