import { GalleryArtifactVersionSource } from './GalleryArtifactVersionSource';
import { GalleryOSDiskImage } from './GalleryOSDiskImage';
import { GalleryDataDiskImage } from './GalleryDataDiskImage';
/**
 * @description This is the storage profile of a Gallery Image Version.
 */
export interface GalleryImageVersionStorageProfile {
    source: GalleryArtifactVersionSource;
    osDiskImage: GalleryOSDiskImage;
    /**
     * @description A list of data disk images.
     */
    dataDiskImages: Array<GalleryDataDiskImage>;
}
