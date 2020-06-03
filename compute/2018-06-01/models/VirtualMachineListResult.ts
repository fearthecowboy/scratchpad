import { VirtualMachine } from './VirtualMachine';
/**
 * @description The List Virtual Machine operation response.
 */
export interface VirtualMachineListResult {
    /**
     * @description The list of virtual machines.
     */
    value?: Array<VirtualMachine>;
    /**
     * @description The URI to fetch the next page of VMs. Call ListNext() with this URI to fetch the next page of Virtual Machines.
     */
    nextLink: string;
}
