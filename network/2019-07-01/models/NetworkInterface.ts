import { Resource } from './Resource';
import { NetworkInterfacePropertiesFormat } from './NetworkInterfacePropertiesFormat';
/**
 * @description A network interface in a resource group.
 */
export interface NetworkInterface extends Resource {
    /**
     * @description Properties of the network interface.
     */
    properties: NetworkInterfacePropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
