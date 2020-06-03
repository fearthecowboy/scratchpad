import { Resource } from './Resource';
import { VirtualMachineExtensionImageProperties } from './VirtualMachineExtensionImageProperties';
/**
 * @description Describes a Virtual Machine Extension Image.
 */
export interface VirtualMachineExtensionImage extends Resource {
    properties: VirtualMachineExtensionImageProperties;
}
