import { ImageProperties } from './ImageProperties';
import { UpdateResource } from './UpdateResource';

/**
 * @description The source user image virtual hard disk. Only tags may be updated.
 * @since 2018-06-01
 */
export interface ImageUpdate extends UpdateResource {
    properties: ImageProperties;
}
