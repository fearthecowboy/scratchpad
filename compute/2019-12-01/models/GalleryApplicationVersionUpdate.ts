import { UpdateResourceDefinition } from './UpdateResourceDefinition';
import { GalleryApplicationVersionProperties } from './GalleryApplicationVersionProperties';
/**
 * @description Specifies information about the gallery Application Version that you want to update.
 */
export interface GalleryApplicationVersionUpdate extends UpdateResourceDefinition {
    properties: GalleryApplicationVersionProperties;
}
