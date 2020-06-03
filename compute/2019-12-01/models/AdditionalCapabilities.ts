
/**
 * @description Enables or disables a capability on the virtual machine or virtual machine scale set.
 */
export interface AdditionalCapabilities {
    /**
     * @description The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.
     */
    ultraSSDEnabled: boolean;
}
