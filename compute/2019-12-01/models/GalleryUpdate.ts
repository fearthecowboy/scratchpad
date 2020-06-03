import { UpdateResourceDefinition } from './UpdateResourceDefinition';
import { GalleryProperties } from './GalleryProperties';
/**
 * @description Specifies information about the Shared Image Gallery that you want to update.
 */
export interface GalleryUpdate extends UpdateResourceDefinition {
    properties: GalleryProperties;
}
