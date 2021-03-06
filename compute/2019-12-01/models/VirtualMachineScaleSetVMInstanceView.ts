import { VirtualMachineAgentInstanceView } from './VirtualMachineAgentInstanceView';
import { MaintenanceRedeployStatus } from './MaintenanceRedeployStatus';
import { DiskInstanceView } from './DiskInstanceView';
import { VirtualMachineExtensionInstanceView } from './VirtualMachineExtensionInstanceView';
import { VirtualMachineHealthStatus } from './VirtualMachineHealthStatus';
import { BootDiagnosticsInstanceView } from './BootDiagnosticsInstanceView';
import { InstanceViewStatus } from './InstanceViewStatus';
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
     * @description The Maintenance Operation status on the virtual machine.
     */
    maintenanceRedeployStatus: MaintenanceRedeployStatus;
    /**
     * @description The disks information.
     */
    disks: Array<DiskInstanceView>;
    /**
     * @description The extensions information.
     */
    extensions: Array<VirtualMachineExtensionInstanceView>;
    /**
     * @description The health status for the VM.
     */
    readonly vmHealth: VirtualMachineHealthStatus;
    /**
     * @description Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics: BootDiagnosticsInstanceView;
    /**
     * @description The resource status information.
     */
    statuses: Array<InstanceViewStatus>;
    /**
     * @description The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId.
     */
    placementGroupId: string;
}
