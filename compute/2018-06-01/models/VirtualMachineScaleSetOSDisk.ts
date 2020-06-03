import { CachingTypes } from '../enums/CachingTypes';
import { DiskCreateOptionTypes } from '../enums/DiskCreateOptionTypes';
import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { VirtualHardDisk } from './VirtualHardDisk';
import { VirtualMachineScaleSetManagedDiskParameters } from './VirtualMachineScaleSetManagedDiskParameters';
/**
 * @description Describes a virtual machine scale set operating system disk.
 */
export interface VirtualMachineScaleSetOSDisk {
    /**
     * @description The disk name.
     */
    name: string;
    /**
     * @description Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
     */
    caching: CachingTypes;
    /**
     * @description Specifies whether writeAccelerator should be enabled or disabled on the disk.
     */
    writeAcceleratorEnabled: boolean;
    /**
     * @description Specifies how the virtual machines in the scale set should be created.<br><br> The only allowed value is: **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
     */
    createOption?: DiskCreateOptionTypes | string;
    /**
     * @description Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB: int32;
    /**
     * @description This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    osType: OperatingSystemTypes;
    /**
     * @description Specifies information about the unmanaged user image to base the scale set on.
     */
    image: VirtualHardDisk;
    /**
     * @description Specifies the container urls that are used to store operating system disks for the scale set.
     */
    vhdContainers: Array<string>;
    /**
     * @description The managed disk parameters.
     */
    managedDisk: VirtualMachineScaleSetManagedDiskParameters;
}
