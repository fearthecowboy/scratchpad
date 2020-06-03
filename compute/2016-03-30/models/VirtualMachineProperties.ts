import { HardwareProfile } from './HardwareProfile';
import { StorageProfile } from './StorageProfile';
import { OSProfile } from './OSProfile';
import { NetworkProfile } from './NetworkProfile';
import { DiagnosticsProfile } from './DiagnosticsProfile';
import { SubResource } from './SubResource';
import { VirtualMachineInstanceView } from './VirtualMachineInstanceView';
/**
 * @description Describes the properties of a Virtual Machine.
 */
export interface VirtualMachineProperties {
    /**
     * @description Specifies the hardware settings for the virtual machine.
     */
    hardwareProfile: HardwareProfile;
    /**
     * @description Specifies the storage settings for the virtual machine disks.
     */
    storageProfile: StorageProfile;
    /**
     * @description Specifies the operating system settings for the virtual machine.
     */
    osProfile: OSProfile;
    /**
     * @description Specifies the network interfaces of the virtual machine.
     */
    networkProfile: NetworkProfile;
    /**
     * @description Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile: DiagnosticsProfile;
    /**
     * @description Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
     */
    availabilitySet: SubResource;
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string ;
    /**
     * @description The virtual machine instance view.
     */
    readonly instanceView: VirtualMachineInstanceView;
    /**
     * @description Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
     */
    licenseType: string;
    /**
     * @description Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
     */
    readonly vmId: string ;
}
