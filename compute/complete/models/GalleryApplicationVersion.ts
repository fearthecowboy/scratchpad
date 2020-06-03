import { GalleryApplicationVersionProperties } from './GalleryApplicationVersionProperties';
import { Resource } from './Resource';
/**
 * @description Specifies information about the gallery Application Version that you want to create or update.
 * @since 2019-12-01
 */
export interface GalleryApplicationVersion extends Resource {
    properties: GalleryApplicationVersionProperties;
}
