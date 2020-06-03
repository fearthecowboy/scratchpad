
/**
 * @extensible
 * @description Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. <br><br> 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS.
 */
export enum VirtualMachinePriorityTypes {
    /**
     *
     */
    Regular = 'Regular',
    /**
     *
     */
    Low = 'Low',
    /**
     *
     */
    Spot = 'Spot'
}
