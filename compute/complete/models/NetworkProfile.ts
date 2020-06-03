import { NetworkInterfaceReference } from './NetworkInterfaceReference';

/**
 * @description Specifies the network interfaces of the virtual machine.
 */
export interface NetworkProfile {
    /**
     * @description Specifies the list of resource Ids for the network interfaces associated with the virtual machine.
     */
    networkInterfaces: Array<NetworkInterfaceReference>;
}
