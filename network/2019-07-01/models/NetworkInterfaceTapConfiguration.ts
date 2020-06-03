import { SubResource } from './SubResource';
import { NetworkInterfaceTapConfigurationPropertiesFormat } from './NetworkInterfaceTapConfigurationPropertiesFormat';
/**
 * @description Tap configuration in a Network Interface.
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
     */
    etag: string;
    /**
     * @description Sub Resource type.
     */
    readonly type: string ;
}
