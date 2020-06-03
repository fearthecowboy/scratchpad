import { ImageReference } from './ImageReference';
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
}
