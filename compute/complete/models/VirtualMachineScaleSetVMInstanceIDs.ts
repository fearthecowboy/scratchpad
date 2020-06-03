
/**
 * @description Specifies a list of virtual machine instance IDs from the VM scale set.
 */
export interface VirtualMachineScaleSetVMInstanceIDs {
    /**
     * @description The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set.
     */
    instanceIds: Array<string>;
}
