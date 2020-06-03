import { Resource } from './Resource';
import { GalleryApplicationProperties } from './GalleryApplicationProperties';
/**
 * @description Specifies information about the gallery Application Definition that you want to create or update.
 */
export interface GalleryApplication extends Resource {
    properties: GalleryApplicationProperties;
}
