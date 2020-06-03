import { GalleryImageVersionProperties } from './GalleryImageVersionProperties';
import { UpdateResourceDefinition } from './UpdateResourceDefinition';
/**
 * @description Specifies information about the gallery Image Version that you want to update.
 * @since 2019-12-01
 */
export interface GalleryImageVersionUpdate extends UpdateResourceDefinition {
    properties: GalleryImageVersionProperties;
}
