import { CachingTypes } from '../enums/CachingTypes';
import { VirtualHardDisk } from './VirtualHardDisk';
import { VirtualMachineScaleSetManagedDiskParameters } from './VirtualMachineScaleSetManagedDiskParameters';
/**
 * @description Describes virtual machine scale set operating system disk Update Object. This should be used for Updating VMSS OS Disk.
 */
export interface VirtualMachineScaleSetUpdateOSDisk {
    /**
     * @description The caching type.
     */
    caching: CachingTypes;
    /**
     * @description The Source User Image VirtualHardDisk. This VirtualHardDisk will be copied before using it to attach to the Virtual Machine. If SourceImage is provided, the destination VirtualHardDisk should not exist.
     */
    image: VirtualHardDisk;
    /**
     * @description The list of virtual hard disk container uris.
     */
    vhdContainers: Array<string>;
    /**
     * @description The managed disk parameters.
     */
    managedDisk: VirtualMachineScaleSetManagedDiskParameters;
}
