import { TargetRegion } from './TargetRegion';
import { GalleryArtifactSource } from './GalleryArtifactSource';
/**
 * @description Describes the basic gallery artifact publishing profile.
 */
export interface GalleryArtifactPublishingProfileBase {
    /**
     * @description The target regions where the Image Version is going to be replicated to. This property is updatable.
     */
    targetRegions: Array<TargetRegion>;
    source?: GalleryArtifactSource;
}
