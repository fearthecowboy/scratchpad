import { ManagedArtifact } from './ManagedArtifact';
/**
 * @description The source image from which the Image Version is going to be created.
 */
export interface GalleryArtifactSource {
    managedImage?: ManagedArtifact;
}
