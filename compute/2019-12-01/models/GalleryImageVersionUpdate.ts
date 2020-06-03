import { UpdateResourceDefinition } from './UpdateResourceDefinition';
import { GalleryImageVersionProperties } from './GalleryImageVersionProperties';
/**
 * @description Specifies information about the gallery Image Version that you want to update.
 */
export interface GalleryImageVersionUpdate extends UpdateResourceDefinition {
    properties: GalleryImageVersionProperties;
}
