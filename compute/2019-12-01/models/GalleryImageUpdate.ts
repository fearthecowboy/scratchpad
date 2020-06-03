import { UpdateResourceDefinition } from './UpdateResourceDefinition';
import { GalleryImageProperties } from './GalleryImageProperties';
/**
 * @description Specifies information about the gallery Image Definition that you want to update.
 */
export interface GalleryImageUpdate extends UpdateResourceDefinition {
    properties: GalleryImageProperties;
}
