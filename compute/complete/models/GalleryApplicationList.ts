import { GalleryApplication } from './GalleryApplication';
/**
 * @description The List Gallery Applications operation response.
 * @since 2019-12-01
 */
export interface GalleryApplicationList {
    /**
     * @description A list of Gallery Applications.
     */
    value?: Array<GalleryApplication>;
    /**
     * @description The uri to fetch the next page of Application Definitions in the Application Gallery. Call ListNext() with this to fetch the next page of gallery Application Definitions.
     */
    nextLink: string;
}
