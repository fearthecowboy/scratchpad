import { Image } from './Image';

/**
 * @description The List Image operation response.
 * @since 2017-03-30
 */
export interface ImageListResult {
    /**
     * @description The list of Images.
     */
    value?: Array<Image>;
    /**
     * @description The uri to fetch the next page of Images. Call ListNext() with this to fetch the next page of Images.
     */
    nextLink: string;
}
