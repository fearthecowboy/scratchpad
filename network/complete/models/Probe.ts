import { ProbePropertiesFormat } from './ProbePropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description A load balancer probe.
 */
export interface Probe extends SubResource {
    properties: ProbePropertiesFormat;
    /**
     * @description Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
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
