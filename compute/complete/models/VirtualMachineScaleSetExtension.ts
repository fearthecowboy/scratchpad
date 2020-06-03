import { SubResource } from './SubResource';
import { VirtualMachineScaleSetExtensionProperties } from './VirtualMachineScaleSetExtensionProperties';

/**
 * @description Describes a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtension extends SubResource {
    /**
     * @description The name of the extension.
     */
    name: string;
    properties: VirtualMachineScaleSetExtensionProperties;
    /** @description Resource type
     * @since 2019-12-01
     */
    readonly type: string;
}
