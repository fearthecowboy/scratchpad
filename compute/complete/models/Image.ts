import { ImageProperties } from './ImageProperties';
import { Resource } from './Resource';

/**
 * @description The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
 * @since 2017-03-30
 */
export interface Image extends Resource {
    properties: ImageProperties;
}
