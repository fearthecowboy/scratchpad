import { GalleryImage } from './GalleryImage';

/**
 * @description The List Gallery Images operation response.
 * @since 2018-06-01
 */
export interface GalleryImageList {
    /**
     * @description A list of Shared Image Gallery images.
     */
    value?: Array<GalleryImage>;
    /**
     * @description The uri to fetch the next page of Image Definitions in the Shared Image Gallery. Call ListNext() with this to fetch the next page of gallery Image Definitions.
     */
    nextLink: string;
}
