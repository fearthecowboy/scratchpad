import { GalleryProperties } from './GalleryProperties';
import { UpdateResourceDefinition } from './UpdateResourceDefinition';
/**
 * @description Specifies information about the Shared Image Gallery that you want to update.
 * @since 2019-12-01
 */
export interface GalleryUpdate extends UpdateResourceDefinition {
    properties: GalleryProperties;
}
