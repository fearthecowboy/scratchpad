import { NetworkInterfaceIPConfigurationPropertiesFormat } from './NetworkInterfaceIPConfigurationPropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description IPConfiguration in a network interface.
 */
export interface NetworkInterfaceIPConfiguration extends SubResource {
    properties: NetworkInterfaceIPConfigurationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
