import { SubResourceReadOnly } from './SubResourceReadOnly';
import { VirtualMachineScaleSetExtensionProperties } from './VirtualMachineScaleSetExtensionProperties';
/**
 * @description Describes a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtension extends SubResourceReadOnly {
    /**
     * @description The name of the extension.
     */
    name: string;
    properties: VirtualMachineScaleSetExtensionProperties;
}
