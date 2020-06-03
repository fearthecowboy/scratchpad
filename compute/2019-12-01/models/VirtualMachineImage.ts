import { VirtualMachineImageResource } from './VirtualMachineImageResource';
import { VirtualMachineImageProperties } from './VirtualMachineImageProperties';
/**
 * @description Describes a Virtual Machine Image.
 */
export interface VirtualMachineImage extends VirtualMachineImageResource {
    properties: VirtualMachineImageProperties;
}
