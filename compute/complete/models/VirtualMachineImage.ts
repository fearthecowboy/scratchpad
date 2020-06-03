import { VirtualMachineImageProperties } from './VirtualMachineImageProperties';
import { VirtualMachineImageResource } from './VirtualMachineImageResource';

/**
 * @description Describes a Virtual Machine Image.
 */
export interface VirtualMachineImage extends VirtualMachineImageResource {
    properties: VirtualMachineImageProperties;
}
