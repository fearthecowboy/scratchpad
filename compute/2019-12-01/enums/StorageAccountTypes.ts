
/**
 * @extensible
 * @description Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disks-types
 */
export enum StorageAccountTypes {
    /**
     *
     */
    Standard_LRS = 'Standard_LRS',
    /**
     *
     */
    Premium_LRS = 'Premium_LRS',
    /**
     *
     */
    StandardSSD_LRS = 'StandardSSD_LRS',
    /**
     *
     */
    UltraSSD_LRS = 'UltraSSD_LRS'
}
