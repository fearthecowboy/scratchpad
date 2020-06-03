import { UpdateResource } from './UpdateResource';
import { VirtualMachineExtensionUpdateProperties } from './VirtualMachineExtensionUpdateProperties';

/**
 * @description Describes a Virtual Machine Extension.
 */
export interface VirtualMachineExtensionUpdate extends UpdateResource {
    properties: VirtualMachineExtensionUpdateProperties;
}
