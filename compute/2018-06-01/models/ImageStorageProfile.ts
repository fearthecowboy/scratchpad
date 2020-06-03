import { ImageOSDisk } from './ImageOSDisk';
import { ImageDataDisk } from './ImageDataDisk';
/**
 * @description Describes a storage profile.
 */
export interface ImageStorageProfile {
    /**
     * @description Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    osDisk: ImageOSDisk;
    /**
     * @description Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    dataDisks: Array<ImageDataDisk>;
    /**
     * @description Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS).
     */
    zoneResilient: boolean;
}
