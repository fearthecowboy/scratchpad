import { ImageReference } from './ImageReference';
import { VirtualMachineScaleSetDataDisk } from './VirtualMachineScaleSetDataDisk';
import { VirtualMachineScaleSetUpdateOSDisk } from './VirtualMachineScaleSetUpdateOSDisk';

/**
 * @description Describes a virtual machine scale set storage profile.
 * @since 2017-03-30
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
