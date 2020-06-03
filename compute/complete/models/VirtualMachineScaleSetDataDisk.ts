import { CachingTypes } from '../enums/CachingTypes';
import { DiskCreateOptionTypes } from '../enums/DiskCreateOptionTypes';
import { VirtualMachineScaleSetManagedDiskParameters } from './VirtualMachineScaleSetManagedDiskParameters';

/**
 * @description Describes a virtual machine scale set data disk.
 * @since 2017-03-30
 */
export interface VirtualMachineScaleSetDataDisk {
    /**
     * @description The disk name.
     */
    name: string;
    /**
     * @description Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun?: int32;
    /**
     * @description Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
     */
    caching: CachingTypes;
    /**
     * @description The create option.
     * @Type  '2018-06-01' - type changed from 'DiskCreateOptionTypes' to 'DiskCreateOptionTypes | string'
     */
    createOption?: DiskCreateOptionTypes | string;
    /**
     * @description Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB: int32;
    /**
     * @description The managed disk parameters.
     */
    managedDisk: VirtualMachineScaleSetManagedDiskParameters;
    /** @description Specifies whether writeAccelerator should be enabled or disabled on the disk.
     * @since 2018-06-01
     */
    writeAcceleratorEnabled: boolean;
    /** @description Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
     * @since 2019-12-01
     */
    diskIOPSReadWrite: int64;
    /** @description Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
     * @since 2019-12-01
     */
    diskMBpsReadWrite: int64;
}
