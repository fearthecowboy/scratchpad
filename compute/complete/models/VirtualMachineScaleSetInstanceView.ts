import { InstanceViewStatus } from './InstanceViewStatus';
import { OrchestrationServiceSummary } from "./OrchestrationServiceSummary";
import { VirtualMachineScaleSetInstanceViewStatusesSummary } from './VirtualMachineScaleSetInstanceViewStatusesSummary';
import { VirtualMachineScaleSetVMExtensionsSummary } from './VirtualMachineScaleSetVMExtensionsSummary';

/**
 * @description The instance view of a virtual machine scale set.
 */
export interface VirtualMachineScaleSetInstanceView {
    /**
     * @description The instance view status summary for the virtual machine scale set.
     */
    readonly virtualMachine: VirtualMachineScaleSetInstanceViewStatusesSummary;
    /**
     * @description The extensions information.
     */
    readonly extensions: Array<VirtualMachineScaleSetVMExtensionsSummary>;
    /**
     * @description The resource status information.
     */
    statuses: Array<InstanceViewStatus>;
    /** @description The orchestration services information.
     * @since 2019-12-01
     */
    readonly orchestrationServices: Array<OrchestrationServiceSummary>;
}
