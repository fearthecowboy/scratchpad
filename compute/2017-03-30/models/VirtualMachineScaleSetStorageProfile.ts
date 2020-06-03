import { ImageReference } from './ImageReference';
import { VirtualMachineScaleSetOSDisk } from './VirtualMachineScaleSetOSDisk';
import { VirtualMachineScaleSetDataDisk } from './VirtualMachineScaleSetDataDisk';
/**
 * @description Describes a virtual machine scale set storage profile.
 */
export interface VirtualMachineScaleSetStorageProfile {
    /**
     * @description Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
     */
    imageReference: ImageReference;
    /**
     * @description Specifies information about the operating system disk used by the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    osDisk: VirtualMachineScaleSetOSDisk;
    /**
     * @description Specifies the parameters that are used to add data disks to the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    dataDisks: Array<VirtualMachineScaleSetDataDisk>;
}
