import { DiffDiskOptions } from '../enums/DiffDiskOptions';
import { DiffDiskPlacement } from '../enums/DiffDiskPlacement';
/**
 * @description Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk.
 * @since 2019-12-01
 */
export interface DiffDiskSettings {
    /**
     * @description Specifies the ephemeral disk settings for operating system disk.
     */
    option: DiffDiskOptions | string;
    /**
     * @description Specifies the ephemeral disk placement for operating system disk.<br><br> Possible values are: <br><br> **CacheDisk** <br><br> **ResourceDisk** <br><br> Default: **CacheDisk** if one is configured for the VM size otherwise **ResourceDisk** is used.<br><br> Refer to VM size documentation for Windows VM at https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/en-us/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk.
     */
    placement: DiffDiskPlacement | string;
}
