import { HyperVGenerationType } from "../enums/HyperVGenerationType";
import { BootDiagnosticsInstanceView } from './BootDiagnosticsInstanceView';
import { DiskInstanceView } from './DiskInstanceView';
import { InstanceViewStatus } from './InstanceViewStatus';
import { MaintenanceRedeployStatus } from "./MaintenanceRedeployStatus";
import { VirtualMachineAgentInstanceView } from './VirtualMachineAgentInstanceView';
import { VirtualMachineExtensionInstanceView } from './VirtualMachineExtensionInstanceView';

/**
 * @description The instance view of a virtual machine.
 */
export interface VirtualMachineInstanceView {
    /**
     * @description Specifies the update domain of the virtual machine.
     */
    platformUpdateDomain: int32;
    /**
     * @description Specifies the fault domain of the virtual machine.
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
     * @description The virtual machine disk information.
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
    /** @description The Maintenance Operation status on the virtual machine.
     * @since 2017-03-30
     */
    maintenanceRedeployStatus: MaintenanceRedeployStatus;
    /** @description The computer name assigned to the virtual machine.
     * @since 2018-06-01
     */
    computerName: string;
    /** @description The Operating System running on the virtual machine.
     * @since 2018-06-01
     */
    osName: string;
    /** @description The version of Operating System running on the virtual machine.
     * @since 2018-06-01
     */
    osVersion: string;
    /** @description Specifies the HyperVGeneration Type associated with a resource
     * @since 2019-12-01
     */
    hyperVGeneration: HyperVGenerationType | string;
}
