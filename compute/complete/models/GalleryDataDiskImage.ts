import { GalleryDiskImage } from './GalleryDiskImage';

/**
 * @description This is the data disk image.
 * @since 2018-06-01
 */
export interface GalleryDataDiskImage extends GalleryDiskImage {
    /**
     * @description This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
     * @Readonly  '2019-12-01' - removed readonly
     * @Optional  '2019-12-01' - made property optional
     */
    lun?: int32;
}
