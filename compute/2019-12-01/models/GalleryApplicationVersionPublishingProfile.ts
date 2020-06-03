import { GalleryArtifactPublishingProfileBase } from './GalleryArtifactPublishingProfileBase';
import { UserArtifactSource } from './UserArtifactSource';
/**
 * @description The publishing profile of a gallery Image Version.
 */
export interface GalleryApplicationVersionPublishingProfile extends GalleryArtifactPublishingProfileBase {
    source?: UserArtifactSource;
    /**
     * @description Optional. May be used to help process this file. The type of file contained in the source, e.g. zip, json, etc.
     */
    contentType: string;
    /**
     * @description Optional. Whether or not this application reports health.
     */
    enableHealthCheck: boolean;
}
