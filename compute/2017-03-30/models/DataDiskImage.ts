
/**
 * @description Contains the data disk images information.
 */
export interface DataDiskImage {
    /**
     * @description Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
     */
    readonly lun: int32;
}
