import { GalleryArtifactPublishingProfileBase } from './GalleryArtifactPublishingProfileBase';

/**
 * @description The publishing profile of a gallery Image Version.
 * @since 2018-06-01
 */
export interface GalleryImageVersionPublishingProfile extends GalleryArtifactPublishingProfileBase {
    /**
     * @description The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
     * @deleted 2019-12-01
     */
    replicaCount: int32;
    /**
     * @description If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
     * @deleted 2019-12-01
     */
    excludeFromLatest: boolean;
    /**
     * @description The timestamp for when the gallery Image Version is published.
     * @deleted 2019-12-01
     */
    readonly publishedDate: dateTime ;
    /**
     * @description The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable.
     * @deleted 2019-12-01
     */
    endOfLifeDate: dateTime;
}
