import { HostCaching } from '../enums/HostCaching';
/**
 * @description This is the disk image base class.
 */
export interface GalleryDiskImage {
    /**
     * @description This property indicates the size of the VHD to be created.
     */
    readonly sizeInGB: int32;
    /**
     * @description The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
     */
    readonly hostCaching: HostCaching;
}
