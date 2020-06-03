import { GalleryImageVersion } from './GalleryImageVersion';

/**
 * @description The List Gallery Image version operation response.
 * @since 2018-06-01
 */
export interface GalleryImageVersionList {
    /**
     * @description A list of gallery Image Versions.
     */
    value?: Array<GalleryImageVersion>;
    /**
     * @description The uri to fetch the next page of gallery Image Versions. Call ListNext() with this to fetch the next page of gallery Image Versions.
     */
    nextLink: string;
}
