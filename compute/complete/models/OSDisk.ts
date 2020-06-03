import { CachingTypes } from '../enums/CachingTypes';
import { DiskCreateOptionTypes } from '../enums/DiskCreateOptionTypes';
import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { DiffDiskSettings } from "./DiffDiskSettings";
import { DiskEncryptionSettings } from './DiskEncryptionSettings';
import { ManagedDiskParameters } from "./ManagedDiskParameters";
import { VirtualHardDisk } from './VirtualHardDisk';

/**
 * @description Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
 */
export interface OSDisk {
    /**
     * @description This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    osType: OperatingSystemTypes;
    /**
     * @description Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
     */
    encryptionSettings: DiskEncryptionSettings;
    /**
     * @description The disk name.
     * @Optional  '2017-03-30' - made property required
     */
    name: string;
    /**
     * @description The virtual hard disk.
     * @Optional  '2017-03-30' - made property required
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
     * @Type  '2018-06-01' - type changed from 'DiskCreateOptionTypes' to 'DiskCreateOptionTypes | string'
     */
    createOption?: DiskCreateOptionTypes | string;
    /**
     * @description Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB: int32;
    /** @description The managed disk parameters.
     * @since 2017-03-30
     */
    managedDisk: ManagedDiskParameters;
    /** @description Specifies whether writeAccelerator should be enabled or disabled on the disk.
     * @since 2018-06-01
     */
    writeAcceleratorEnabled: boolean;
    /** @description Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
     * @since 2019-12-01
     */
    diffDiskSettings: DiffDiskSettings;
}
