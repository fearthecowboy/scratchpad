import { VirtualMachineExtension } from './VirtualMachineExtension';

/**
 * @description The List Extension operation response
 * @since 2016-03-30
 */
export interface VirtualMachineExtensionsListResult {
    /**
     * @description The list of extensions
     */
    value: Array<VirtualMachineExtension>;
}
