import { VirtualMachineStatusCodeCount } from './VirtualMachineStatusCodeCount';
/**
 * @description Extensions summary for virtual machines of a virtual machine scale set.
 */
export interface VirtualMachineScaleSetVMExtensionsSummary {
    /**
     * @description The extension name.
     */
    readonly name: string ;
    /**
     * @description The extensions information.
     */
    readonly statusesSummary: Array<VirtualMachineStatusCodeCount>;
}
