import { BootDiagnosticsInstanceView } from './BootDiagnosticsInstanceView';
import { DiskInstanceView } from './DiskInstanceView';
import { InstanceViewStatus } from './InstanceViewStatus';
import { MaintenanceRedeployStatus } from "./MaintenanceRedeployStatus";
import { VirtualMachineAgentInstanceView } from './VirtualMachineAgentInstanceView';
import { VirtualMachineExtensionInstanceView } from './VirtualMachineExtensionInstanceView';
import { VirtualMachineHealthStatus } from "./VirtualMachineHealthStatus";

/**
 * @description The instance view of a virtual machine scale set VM.
 */
export interface VirtualMachineScaleSetVMInstanceView {
    /**
     * @description The Update Domain count.
     */
    platformUpdateDomain: int32;
    /**
     * @description The Fault Domain count.
     */
    platformFaultDomain: int32;
    /**
     * @description The Remote desktop certificate thumbprint.
     */
    rdpThumbPrint: string;
    /**
     * @description The VM Agent running on the virtual machine.
     */
    vmAgent: VirtualMachineAgentInstanceView;
    /**
     * @description The disks information.
     */
    disks: Array<DiskInstanceView>;
    /**
     * @description The extensions information.
     */
    extensions: Array<VirtualMachineExtensionInstanceView>;
    /**
     * @description Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics: BootDiagnosticsInstanceView;
    /**
     * @description The resource status information.
     */
    statuses: Array<InstanceViewStatus>;
    /** @description The health status for the VM.
     * @since 2017-03-30
     */
    readonly vmHealth: VirtualMachineHealthStatus;
    /** @description The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId.
     * @since 2017-03-30
     */
    placementGroupId: string;
    /** @description The Maintenance Operation status on the virtual machine.
     * @since 2018-06-01
     */
    maintenanceRedeployStatus: MaintenanceRedeployStatus;
}
