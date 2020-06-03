
/**
 * @description The source image from which the Image Version is going to be created.
 */
export interface UserArtifactSource {
    /**
     * @description Required. The fileName of the artifact.
     */
    fileName?: string;
    /**
     * @description Required. The mediaLink of the artifact, must be a readable storage blob.
     */
    mediaLink?: string;
}
