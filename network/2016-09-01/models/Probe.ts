import { SubResource } from './SubResource';
import { ProbePropertiesFormat } from './ProbePropertiesFormat';
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
     */
    etag: string;
}
