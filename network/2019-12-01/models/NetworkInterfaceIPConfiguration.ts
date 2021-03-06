import { SubResource } from './SubResource';
import { NetworkInterfaceIPConfigurationPropertiesFormat } from './NetworkInterfaceIPConfigurationPropertiesFormat';
/**
 * @description IPConfiguration in a network interface.
 */
export interface NetworkInterfaceIPConfiguration extends SubResource {
    /**
     * @description Network interface IP configuration properties.
     */
    properties: NetworkInterfaceIPConfigurationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
