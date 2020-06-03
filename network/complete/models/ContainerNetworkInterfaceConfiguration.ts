import { ContainerNetworkInterfaceConfigurationPropertiesFormat } from './ContainerNetworkInterfaceConfigurationPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Container network interface configuration child resource.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
