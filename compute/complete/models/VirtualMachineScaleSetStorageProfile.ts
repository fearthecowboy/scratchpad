import { ImageReference } from './ImageReference';
import { VirtualMachineScaleSetDataDisk } from "./VirtualMachineScaleSetDataDisk";
import { VirtualMachineScaleSetOSDisk } from './VirtualMachineScaleSetOSDisk';

/**
 * @description Describes a virtual machine scale set storage profile.
 */
export interface VirtualMachineScaleSetStorageProfile {
    /**
     * @description The image reference.
     */
    imageReference: ImageReference;
    /**
     * @description The OS disk.
     */
    osDisk: VirtualMachineScaleSetOSDisk;
    /** @description Specifies the parameters that are used to add data disks to the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     * @since 2017-03-30
     */
    dataDisks: Array<VirtualMachineScaleSetDataDisk>;
}
