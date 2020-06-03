import { GalleryApplicationProperties } from './GalleryApplicationProperties';
import { Resource } from './Resource';
/**
 * @description Specifies information about the gallery Application Definition that you want to create or update.
 * @since 2019-12-01
 */
export interface GalleryApplication extends Resource {
    properties: GalleryApplicationProperties;
}
