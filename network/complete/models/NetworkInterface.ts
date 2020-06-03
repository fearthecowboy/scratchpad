import { NetworkInterfacePropertiesFormat } from './NetworkInterfacePropertiesFormat';
import { Resource } from './Resource';

/**
 * @description A network interface in a resource group.
 */
export interface NetworkInterface extends Resource {
    properties: NetworkInterfacePropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
