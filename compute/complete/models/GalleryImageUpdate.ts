import { GalleryImageProperties } from './GalleryImageProperties';
import { UpdateResourceDefinition } from './UpdateResourceDefinition';
/**
 * @description Specifies information about the gallery Image Definition that you want to update.
 * @since 2019-12-01
 */
export interface GalleryImageUpdate extends UpdateResourceDefinition {
    properties: GalleryImageProperties;
}
