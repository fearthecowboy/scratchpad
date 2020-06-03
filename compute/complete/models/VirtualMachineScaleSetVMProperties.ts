import { AdditionalCapabilities } from "./AdditionalCapabilities";
import { DiagnosticsProfile } from './DiagnosticsProfile';
import { HardwareProfile } from './HardwareProfile';
import { NetworkProfile } from './NetworkProfile';
import { OSProfile } from './OSProfile';
import { StorageProfile } from './StorageProfile';
import { SubResource } from './SubResource';
import { VirtualMachineScaleSetVMInstanceView } from './VirtualMachineScaleSetVMInstanceView';
import { VirtualMachineScaleSetVMNetworkProfileConfiguration } from "./VirtualMachineScaleSetVMNetworkProfileConfiguration";
import { VirtualMachineScaleSetVMProtectionPolicy } from "./VirtualMachineScaleSetVMProtectionPolicy";

/**
 * @description Describes the properties of a virtual machine scale set virtual machine.
 */
export interface VirtualMachineScaleSetVMProperties {
    /**
     * @description Specifies whether the latest model has been applied to the virtual machine.
     */
    readonly latestModelApplied: boolean ;
    /**
     * @description The virtual machine instance view.
     */
    readonly instanceView: VirtualMachineScaleSetVMInstanceView;
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
     * @Readonly  '2016-03-30' - added readonly
     */
    readonly provisioningState: string;
    /**
     * @description Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
     */
    licenseType: string;
    /** @description Azure VM unique ID.
     * @since 2016-03-30
     */
    readonly vmId: string;
    /** @description Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     * @since 2019-12-01
     */
    additionalCapabilities: AdditionalCapabilities;
    /** @description Specifies the network profile configuration of the virtual machine.
     * @since 2019-12-01
     */
    networkProfileConfiguration: VirtualMachineScaleSetVMNetworkProfileConfiguration;
    /** @description Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
     * @since 2019-12-01
     */
    readonly modelDefinitionApplied: string;
    /** @description Specifies the protection policy of the virtual machine.
     * @since 2019-12-01
     */
    protectionPolicy: VirtualMachineScaleSetVMProtectionPolicy;
}
