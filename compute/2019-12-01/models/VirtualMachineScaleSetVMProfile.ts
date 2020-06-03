import { VirtualMachineScaleSetOSProfile } from './VirtualMachineScaleSetOSProfile';
import { VirtualMachineScaleSetStorageProfile } from './VirtualMachineScaleSetStorageProfile';
import { VirtualMachineScaleSetNetworkProfile } from './VirtualMachineScaleSetNetworkProfile';
import { DiagnosticsProfile } from './DiagnosticsProfile';
import { VirtualMachineScaleSetExtensionProfile } from './VirtualMachineScaleSetExtensionProfile';
import { VirtualMachinePriorityTypes } from '../enums/VirtualMachinePriorityTypes';
import { VirtualMachineEvictionPolicyTypes } from '../enums/VirtualMachineEvictionPolicyTypes';
import { BillingProfile } from './BillingProfile';
import { ScheduledEventsProfile } from './ScheduledEventsProfile';
/**
 * @description Describes a virtual machine scale set virtual machine profile.
 */
export interface VirtualMachineScaleSetVMProfile {
    /**
     * @description Specifies the operating system settings for the virtual machines in the scale set.
     */
    osProfile: VirtualMachineScaleSetOSProfile;
    /**
     * @description Specifies the storage settings for the virtual machine disks.
     */
    storageProfile: VirtualMachineScaleSetStorageProfile;
    /**
     * @description Specifies properties of the network interfaces of the virtual machines in the scale set.
     */
    networkProfile: VirtualMachineScaleSetNetworkProfile;
    /**
     * @description Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile: DiagnosticsProfile;
    /**
     * @description Specifies a collection of settings for extensions installed on virtual machines in the scale set.
     */
    extensionProfile: VirtualMachineScaleSetExtensionProfile;
    /**
     * @description Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
     */
    licenseType: string;
    /**
     * @description Specifies the priority for the virtual machines in the scale set. <br><br>Minimum api-version: 2017-10-30-preview
     */
    priority: VirtualMachinePriorityTypes | string;
    /**
     * @description Specifies the eviction policy for the Azure Spot virtual machine and Azure Spot scale set. <br><br>For Azure Spot virtual machines, the only supported value is 'Deallocate' and the minimum api-version is 2019-03-01. <br><br>For Azure Spot scale sets, both 'Deallocate' and 'Delete' are supported and the minimum api-version is 2017-10-30-preview.
     */
    evictionPolicy: VirtualMachineEvictionPolicyTypes | string;
    /**
     * @description Specifies the billing related details of a Azure Spot VMSS. <br><br>Minimum api-version: 2019-03-01.
     */
    billingProfile: BillingProfile;
    /**
     * @description Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile: ScheduledEventsProfile;
}
