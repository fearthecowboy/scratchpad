import { TargetRegion } from './TargetRegion';
import { StorageAccountType } from '../enums/StorageAccountType';
/**
 * @description Describes the basic gallery artifact publishing profile.
 */
export interface GalleryArtifactPublishingProfileBase {
    /**
     * @description The target regions where the Image Version is going to be replicated to. This property is updatable.
     */
    targetRegions: Array<TargetRegion>;
    /**
     * @description The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
     */
    replicaCount: int32;
    /**
     * @description If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
     */
    excludeFromLatest: boolean;
    /**
     * @description The timestamp for when the gallery Image Version is published.
     */
    readonly publishedDate: dateTime ;
    /**
     * @description The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate: dateTime;
    /**
     * @description Specifies the storage account type to be used to store the image. This property is not updatable.
     */
    storageAccountType: StorageAccountType | string;
}
