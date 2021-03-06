import { CachingTypes } from '../enums/CachingTypes';
import { DiskCreateOptionTypes } from '../enums/DiskCreateOptionTypes';
import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { VirtualHardDisk } from './VirtualHardDisk';
/**
 * @description Describes a virtual machine scale set operating system disk.
 */
export interface VirtualMachineScaleSetOSDisk {
    /**
     * @description The disk name.
     */
    name?: string;
    /**
     * @description Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
     */
    caching: CachingTypes;
    /**
     * @description Specifies how the virtual machines in the scale set should be created.<br><br> The only allowed value is: **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
     */
    createOption?: DiskCreateOptionTypes;
    /**
     * @description This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    osType: OperatingSystemTypes;
    /**
     * @description The Source User Image VirtualHardDisk. This VirtualHardDisk will be copied before using it to attach to the Virtual Machine. If SourceImage is provided, the destination VirtualHardDisk should not exist.
     */
    image: VirtualHardDisk;
    /**
     * @description The list of virtual hard disk container uris.
     */
    vhdContainers: Array<string>;
}
