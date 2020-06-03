import { VirtualMachineAgentInstanceView } from './VirtualMachineAgentInstanceView';
import { DiskInstanceView } from './DiskInstanceView';
import { VirtualMachineExtensionInstanceView } from './VirtualMachineExtensionInstanceView';
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
}
