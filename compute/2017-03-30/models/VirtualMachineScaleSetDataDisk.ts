import { CachingTypes } from '../enums/CachingTypes';
import { DiskCreateOptionTypes } from '../enums/DiskCreateOptionTypes';
import { VirtualMachineScaleSetManagedDiskParameters } from './VirtualMachineScaleSetManagedDiskParameters';
/**
 * @description Describes a virtual machine scale set data disk.
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
     */
    createOption?: DiskCreateOptionTypes;
    /**
     * @description Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB: int32;
    /**
     * @description The managed disk parameters.
     */
    managedDisk: VirtualMachineScaleSetManagedDiskParameters;
}
