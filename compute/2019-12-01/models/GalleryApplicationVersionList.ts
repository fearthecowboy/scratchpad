import { GalleryApplicationVersion } from './GalleryApplicationVersion';
/**
 * @description The List Gallery Application version operation response.
 */
export interface GalleryApplicationVersionList {
    /**
     * @description A list of gallery Application Versions.
     */
    value?: Array<GalleryApplicationVersion>;
    /**
     * @description The uri to fetch the next page of gallery Application Versions. Call ListNext() with this to fetch the next page of gallery Application Versions.
     */
    nextLink: string;
}
