
/**
 * @description Parameters for Reimaging Virtual Machine. NOTE: Virtual Machine OS disk will always be reimaged
 */
export interface VirtualMachineReimageParameters {
    /**
     * @description Specifies whether to reimage temp disk. Default value: false. Note: This temp disk reimage parameter is only supported for VM/VMSS with Ephemeral OS disk.
     */
    tempDisk: boolean;
}
