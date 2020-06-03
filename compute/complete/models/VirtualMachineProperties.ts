import { VirtualMachineEvictionPolicyTypes } from "../enums/VirtualMachineEvictionPolicyTypes";
import { VirtualMachinePriorityTypes } from "../enums/VirtualMachinePriorityTypes";
import { AdditionalCapabilities } from "./AdditionalCapabilities";
import { BillingProfile } from "./BillingProfile";
import { DiagnosticsProfile } from './DiagnosticsProfile';
import { HardwareProfile } from './HardwareProfile';
import { NetworkProfile } from './NetworkProfile';
import { OSProfile } from './OSProfile';
import { StorageProfile } from './StorageProfile';
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
    /** @description Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
     * @since 2016-03-30
     */
    readonly vmId: string;
    /** @description Specifies information about the proximity placement group that the virtual machine should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     * @since 2018-06-01
     */
    proximityPlacementGroup: SubResource;
    /** @description Specifies additional capabilities enabled or disabled on the virtual machine.
     * @since 2019-12-01
     */
    additionalCapabilities: AdditionalCapabilities;
    /** @description Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. <br><br>This property cannot exist along with a non-null properties.availabilitySet reference. <br><br>Minimum api‐version: 2019‐03‐01
     * @since 2019-12-01
     */
    virtualMachineScaleSet: SubResource;
    /** @description Specifies the priority for the virtual machine. <br><br>Minimum api-version: 2019-03-01
     * @since 2019-12-01
     */
    priority: VirtualMachinePriorityTypes | string;
    /** @description Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. <br><br>For Azure Spot virtual machines, the only supported value is 'Deallocate' and the minimum api-version is 2019-03-01. <br><br>For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
     * @since 2019-12-01
     */
    evictionPolicy: VirtualMachineEvictionPolicyTypes | string;
    /** @description Specifies the billing related details of a Azure Spot virtual machine. <br><br>Minimum api-version: 2019-03-01.
     * @since 2019-12-01
     */
    billingProfile: BillingProfile;
    /** @description Specifies information about the dedicated host that the virtual machine resides in. <br><br>Minimum api-version: 2018-10-01.
     * @since 2019-12-01
     */
    host: SubResource;
}
