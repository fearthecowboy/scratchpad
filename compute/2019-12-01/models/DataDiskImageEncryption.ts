import { DiskImageEncryption } from './DiskImageEncryption';
/**
 * @description Contains encryption settings for a data disk image.
 */
export interface DataDiskImageEncryption extends DiskImageEncryption {
    /**
     * @description This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
     */
    lun?: int32;
}
