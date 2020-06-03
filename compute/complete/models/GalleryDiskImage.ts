import { HostCaching } from '../enums/HostCaching';
import { GalleryArtifactVersionSource } from "./GalleryArtifactVersionSource";

/**
 * @description This is the disk image base class.
 * @since 2018-06-01
 */
export interface GalleryDiskImage {
    /**
     * @description This property indicates the size of the VHD to be created.
     */
    readonly sizeInGB: int32;
    /**
     * @description The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
     * @Readonly  '2019-12-01' - removed readonly
     */
    hostCaching: HostCaching;
    /**
     * @since 2019-12-01
     */
    source: GalleryArtifactVersionSource;
}
