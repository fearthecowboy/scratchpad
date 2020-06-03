import { ManagedArtifact } from './ManagedArtifact';

/**
 * @description The source image from which the Image Version is going to be created.
 * @since 2018-06-01
 */
export interface GalleryArtifactSource {
    managedImage?: ManagedArtifact;
}
