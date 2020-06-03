import { SubResource } from './SubResource';
import { ContainerNetworkInterfacePropertiesFormat } from './ContainerNetworkInterfacePropertiesFormat';
/**
 * @description Container network interface child resource.
 */
export interface ContainerNetworkInterface extends SubResource {
    /**
     * @description Container network interface properties.
     */
    properties: ContainerNetworkInterfacePropertiesFormat;
    /**
     * @description The name of the resource. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description Sub Resource type.
     */
    readonly type: string ;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
