import { SubResourceReadOnly } from './SubResourceReadOnly';
import { VirtualMachineScaleSetExtensionProperties } from './VirtualMachineScaleSetExtensionProperties';
/**
 * @description Describes a Virtual Machine Scale Set Extension.
 * @since 2019-12-01
 */
export interface VirtualMachineScaleSetExtensionUpdate extends SubResourceReadOnly {
    /**
     * @description The name of the extension.
     */
    readonly name: string ;
    /**
     * @description Resource type
     */
    readonly type: string ;
    properties: VirtualMachineScaleSetExtensionProperties;
}
