import { VirtualMachineSize } from './VirtualMachineSize';
/**
 * @description The List Virtual Machine operation response.
 */
export interface VirtualMachineSizeListResult {
    /**
     * @description The list of virtual machine sizes.
     */
    value: Array<VirtualMachineSize>;
}
