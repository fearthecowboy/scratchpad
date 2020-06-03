
/**
 * @extensible
 * @description Specifies the ephemeral disk placement for operating system disk. This property can be used by user in the request to choose the location i.e, cache disk or resource disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer Ephemeral OS disk size requirements for Windows VM at https://docs.microsoft.com/en-us/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VM at https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements
 */
export enum DiffDiskPlacement {
    /**
     *
     */
    CacheDisk = 'CacheDisk',
    /**
     *
     */
    ResourceDisk = 'ResourceDisk'
}
