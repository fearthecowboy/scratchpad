import { NetworkInterfaceTapConfigurationPropertiesFormat } from './NetworkInterfaceTapConfigurationPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Tap configuration in a Network Interface.
 * @since 2019-07-01
 */
export interface NetworkInterfaceTapConfiguration extends SubResource {
    /**
     * @description Properties of the Virtual Network Tap configuration.
     */
    properties: NetworkInterfaceTapConfigurationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /**
     * @description Sub Resource type.
     */
    readonly type: string ;
}
