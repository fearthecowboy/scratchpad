import { CachingTypes } from '../enums/CachingTypes';
import { DiskCreateOptionTypes } from '../enums/DiskCreateOptionTypes';
import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { DiffDiskSettings } from "./DiffDiskSettings";
import { VirtualHardDisk } from './VirtualHardDisk';
import { VirtualMachineScaleSetManagedDiskParameters } from "./VirtualMachineScaleSetManagedDiskParameters";

/**
 * @description Describes a virtual machine scale set operating system disk.
 */
export interface VirtualMachineScaleSetOSDisk {
    /**
     * @description The disk name.
     * @Optional  '2017-03-30' - made property required
     */
    name: string;
    /**
     * @description Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
     */
    caching: CachingTypes;
    /**
     * @description Specifies how the virtual machines in the scale set should be created.<br><br> The only allowed value is: **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
     * @Type  '2018-06-01' - type changed from 'DiskCreateOptionTypes' to 'DiskCreateOptionTypes | string'
     */
    createOption?: DiskCreateOptionTypes | string;
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
    /** @description The managed disk parameters.
     * @since 2017-03-30
     */
    managedDisk: VirtualMachineScaleSetManagedDiskParameters;
    /** @description Specifies whether writeAccelerator should be enabled or disabled on the disk.
     * @since 2018-06-01
     */
    writeAcceleratorEnabled: boolean;
    /** @description Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
     * @since 2018-06-01
     */
    diskSizeGB: int32;
    /** @description Specifies the ephemeral disk Settings for the operating system disk used by the virtual machine scale set.
     * @since 2019-12-01
     */
    diffDiskSettings: DiffDiskSettings;
}
