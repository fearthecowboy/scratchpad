import { VirtualHardDisk } from './VirtualHardDisk';
import { CachingTypes } from '../enums/CachingTypes';
import { DiskCreateOptionTypes } from '../enums/DiskCreateOptionTypes';
import { ManagedDiskParameters } from './ManagedDiskParameters';
/**
 * @description Describes a data disk.
 */
export interface DataDisk {
    /**
     * @description Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun?: int32;
    /**
     * @description The disk name.
     */
    name: string;
    /**
     * @description The virtual hard disk.
     */
    vhd: VirtualHardDisk;
    /**
     * @description The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
     */
    image: VirtualHardDisk;
    /**
     * @description Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
     */
    caching: CachingTypes;
    /**
     * @description Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
     */
    createOption?: DiskCreateOptionTypes;
    /**
     * @description Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB: int32;
    /**
     * @description The managed disk parameters.
     */
    managedDisk: ManagedDiskParameters;
}
