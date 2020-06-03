import { SubResource } from './SubResource';
import { ContainerNetworkInterfaceConfigurationPropertiesFormat } from './ContainerNetworkInterfaceConfigurationPropertiesFormat';
/**
 * @description Container network interface configuration child resource.
 */
export interface ContainerNetworkInterfaceConfiguration extends SubResource {
    /**
     * @description Container network interface configuration properties.
     */
    properties: ContainerNetworkInterfaceConfigurationPropertiesFormat;
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
