import { GalleryOSDiskImage } from './GalleryOSDiskImage';
import { GalleryDataDiskImage } from './GalleryDataDiskImage';
/**
 * @description This is the storage profile of a gallery Image Version.
 */
export interface GalleryImageVersionStorageProfile {
    readonly osDiskImage: GalleryOSDiskImage;
    /**
     * @description A list of data disk images.
     */
    readonly dataDiskImages: Array<GalleryDataDiskImage>;
}
