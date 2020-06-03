import { Gallery } from './Gallery';
/**
 * @description The List Galleries operation response.
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
