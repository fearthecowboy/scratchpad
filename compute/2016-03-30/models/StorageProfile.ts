import { ImageReference } from './ImageReference';
import { OSDisk } from './OSDisk';
import { DataDisk } from './DataDisk';
/**
 * @description Specifies the storage settings for the virtual machine disks.
 */
export interface StorageProfile {
    /**
     * @description Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
     */
    imageReference: ImageReference;
    /**
     * @description Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    osDisk: OSDisk;
    /**
     * @description Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    dataDisks: Array<DataDisk>;
}
