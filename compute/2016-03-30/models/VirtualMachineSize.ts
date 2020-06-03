
/**
 * @description Describes the properties of a VM size.
 */
export interface VirtualMachineSize {
    /**
     * @description The name of the virtual machine size.
     */
    name: string;
    /**
     * @description The number of cores supported by the virtual machine size.
     */
    numberOfCores: int32;
    /**
     * @description The OS disk size, in MB, allowed by the virtual machine size.
     */
    osDiskSizeInMB: int32;
    /**
     * @description The resource disk size, in MB, allowed by the virtual machine size.
     */
    resourceDiskSizeInMB: int32;
    /**
     * @description The amount of memory, in MB, supported by the virtual machine size.
     */
    memoryInMB: int32;
    /**
     * @description The maximum number of data disks that can be attached to the virtual machine size.
     */
    maxDataDiskCount: int32;
}
