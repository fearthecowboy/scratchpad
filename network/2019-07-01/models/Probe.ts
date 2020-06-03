import { SubResource } from './SubResource';
import { ProbePropertiesFormat } from './ProbePropertiesFormat';
/**
 * @description A load balancer probe.
 */
export interface Probe extends SubResource {
    /**
     * @description Properties of load balancer probe.
     */
    properties: ProbePropertiesFormat;
    /**
     * @description The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * @description Type of the resource.
     */
    readonly type: string ;
}
