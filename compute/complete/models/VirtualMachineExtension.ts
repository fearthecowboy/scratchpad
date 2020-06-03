import { Resource } from './Resource';
import { VirtualMachineExtensionProperties } from './VirtualMachineExtensionProperties';

/**
 * @description Describes a Virtual Machine Extension.
 */
export interface VirtualMachineExtension extends Resource {
    properties: VirtualMachineExtensionProperties;
}
