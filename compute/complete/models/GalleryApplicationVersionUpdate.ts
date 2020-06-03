import { GalleryApplicationVersionProperties } from './GalleryApplicationVersionProperties';
import { UpdateResourceDefinition } from './UpdateResourceDefinition';
/**
 * @description Specifies information about the gallery Application Version that you want to update.
 * @since 2019-12-01
 */
export interface GalleryApplicationVersionUpdate extends UpdateResourceDefinition {
    properties: GalleryApplicationVersionProperties;
}
