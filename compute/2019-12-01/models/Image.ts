import { Resource } from './Resource';
import { ImageProperties } from './ImageProperties';
/**
 * @description The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
 */
export interface Image extends Resource {
    properties: ImageProperties;
}
