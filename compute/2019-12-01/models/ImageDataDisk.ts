import { ImageDisk } from './ImageDisk';
/**
 * @description Describes a data disk.
 */
export interface ImageDataDisk extends ImageDisk {
    /**
     * @description Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    lun?: int32;
}
