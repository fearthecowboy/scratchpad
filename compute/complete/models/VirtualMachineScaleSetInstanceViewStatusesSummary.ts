import { VirtualMachineStatusCodeCount } from './VirtualMachineStatusCodeCount';

/**
 * @description Instance view statuses summary for virtual machines of a virtual machine scale set.
 */
export interface VirtualMachineScaleSetInstanceViewStatusesSummary {
    /**
     * @description The extensions information.
     */
    readonly statusesSummary: Array<VirtualMachineStatusCodeCount>;
}
