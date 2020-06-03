import { StorageAccountType } from "../enums/StorageAccountType";
import { GalleryArtifactSource } from './GalleryArtifactSource';
import { TargetRegion } from './TargetRegion';

/**
 * @description Describes the basic gallery artifact publishing profile.
 * @since 2018-06-01
 */
export interface GalleryArtifactPublishingProfileBase {
    /**
     * @description The target regions where the Image Version is going to be replicated to. This property is updatable.
     */
    targetRegions: Array<TargetRegion>;
    /**
     * @deleted 2019-12-01
     */
    source?: GalleryArtifactSource;
    /** @description The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
     * @since 2019-12-01
     */
    replicaCount: int32;
    /** @description If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
     * @since 2019-12-01
     */
    excludeFromLatest: boolean;
    /** @description The timestamp for when the gallery Image Version is published.
     * @since 2019-12-01
     */
    readonly publishedDate: dateTime;
    /** @description The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable.
     * @since 2019-12-01
     */
    endOfLifeDate: dateTime;
    /** @description Specifies the storage account type to be used to store the image. This property is not updatable.
     * @since 2019-12-01
     */
    storageAccountType: StorageAccountType | string;
}
