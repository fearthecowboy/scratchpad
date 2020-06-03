import { Gallery } from './Gallery';

/**
 * @description The List Galleries operation response.
 * @since 2018-06-01
 */
export interface GalleryList {
    /**
     * @description A list of galleries.
     */
    value?: Array<Gallery>;
    /**
     * @description The uri to fetch the next page of galleries. Call ListNext() with this to fetch the next page of galleries.
     */
    nextLink: string;
}
