import { UpdateResource } from './UpdateResource';
import { ImageProperties } from './ImageProperties';
/**
 * @description The source user image virtual hard disk. Only tags may be updated.
 */
export interface ImageUpdate extends UpdateResource {
    properties: ImageProperties;
}
