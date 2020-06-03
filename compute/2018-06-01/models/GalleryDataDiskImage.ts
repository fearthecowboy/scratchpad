import { GalleryDiskImage } from './GalleryDiskImage';
/**
 * @description This is the data disk image.
 */
export interface GalleryDataDiskImage extends GalleryDiskImage {
    /**
     * @description This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
     */
    readonly lun: int32;
}
