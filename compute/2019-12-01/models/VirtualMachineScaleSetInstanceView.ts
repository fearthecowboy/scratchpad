import { VirtualMachineScaleSetInstanceViewStatusesSummary } from './VirtualMachineScaleSetInstanceViewStatusesSummary';
import { VirtualMachineScaleSetVMExtensionsSummary } from './VirtualMachineScaleSetVMExtensionsSummary';
import { InstanceViewStatus } from './InstanceViewStatus';
import { OrchestrationServiceSummary } from './OrchestrationServiceSummary';
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
    /**
     * @description The orchestration services information.
     */
    readonly orchestrationServices: Array<OrchestrationServiceSummary>;
}
