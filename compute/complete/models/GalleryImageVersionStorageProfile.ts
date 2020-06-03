import { GalleryArtifactVersionSource } from "./GalleryArtifactVersionSource";
import { GalleryDataDiskImage } from './GalleryDataDiskImage';
import { GalleryOSDiskImage } from './GalleryOSDiskImage';

/**
 * @description This is the storage profile of a gallery Image Version.
 * @since 2018-06-01
 */
export interface GalleryImageVersionStorageProfile {
    /**
     * @Readonly  '2019-12-01' - removed readonly
     */
    osDiskImage: GalleryOSDiskImage;
    /**
     * @description A list of data disk images.
     * @Readonly  '2019-12-01' - removed readonly
     */
    dataDiskImages: Array<GalleryDataDiskImage>;
    /**
     * @since 2019-12-01
     */
    source: GalleryArtifactVersionSource;
}
