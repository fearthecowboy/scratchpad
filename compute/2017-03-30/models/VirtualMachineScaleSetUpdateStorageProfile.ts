import { ImageReference } from './ImageReference';
import { VirtualMachineScaleSetUpdateOSDisk } from './VirtualMachineScaleSetUpdateOSDisk';
import { VirtualMachineScaleSetDataDisk } from './VirtualMachineScaleSetDataDisk';
/**
 * @description Describes a virtual machine scale set storage profile.
 */
export interface VirtualMachineScaleSetUpdateStorageProfile {
    /**
     * @description The image reference.
     */
    imageReference: ImageReference;
    /**
     * @description The OS disk.
     */
    osDisk: VirtualMachineScaleSetUpdateOSDisk;
    /**
     * @description The data disks.
     */
    dataDisks: Array<VirtualMachineScaleSetDataDisk>;
}
