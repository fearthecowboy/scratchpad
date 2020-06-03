import { GalleryApplicationProperties } from './GalleryApplicationProperties';
import { UpdateResourceDefinition } from './UpdateResourceDefinition';
/**
 * @description Specifies information about the gallery Application Definition that you want to update.
 * @since 2019-12-01
 */
export interface GalleryApplicationUpdate extends UpdateResourceDefinition {
    properties: GalleryApplicationProperties;
}
