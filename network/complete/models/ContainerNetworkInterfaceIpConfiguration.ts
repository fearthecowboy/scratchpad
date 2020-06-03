import { ContainerNetworkInterfaceIpConfigurationPropertiesFormat } from './ContainerNetworkInterfaceIpConfigurationPropertiesFormat';

/**
 * @description The ip configuration for a container network interface.
 * @since 2019-07-01
 */
export interface ContainerNetworkInterfaceIpConfiguration {
    /**
     * @description Properties of the container network interface IP configuration.
     */
    properties: ContainerNetworkInterfaceIpConfigurationPropertiesFormat;
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
