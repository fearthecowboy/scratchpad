import { UpdateResourceDefinition } from './UpdateResourceDefinition';
import { GalleryApplicationProperties } from './GalleryApplicationProperties';
/**
 * @description Specifies information about the gallery Application Definition that you want to update.
 */
export interface GalleryApplicationUpdate extends UpdateResourceDefinition {
    properties: GalleryApplicationProperties;
}
