import { VirtualMachineScaleSetExtension } from './VirtualMachineScaleSetExtension';

/**
 * @description The List VM scale set extension operation response.
 * @since 2017-03-30
 */
export interface VirtualMachineScaleSetExtensionListResult {
    /**
     * @description The list of VM scale set extensions.
     */
    value?: Array<VirtualMachineScaleSetExtension>;
    /**
     * @description The uri to fetch the next page of VM scale set extensions. Call ListNext() with this to fetch the next page of VM scale set extensions.
     */
    nextLink: string;
}
