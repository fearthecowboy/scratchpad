import { VirtualMachineExtension } from './VirtualMachineExtension';
/**
 * @description The List Extension operation response
 */
export interface VirtualMachineExtensionsListResult {
    /**
     * @description The list of extensions
     */
    value: Array<VirtualMachineExtension>;
}
