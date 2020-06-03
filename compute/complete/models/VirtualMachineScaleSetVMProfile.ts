import { VirtualMachineEvictionPolicyTypes } from "../enums/VirtualMachineEvictionPolicyTypes";
import { VirtualMachinePriorityTypes } from "../enums/VirtualMachinePriorityTypes";
import { BillingProfile } from "./BillingProfile";
import { DiagnosticsProfile } from "./DiagnosticsProfile";
import { ScheduledEventsProfile } from "./ScheduledEventsProfile";
import { VirtualMachineScaleSetExtensionProfile } from './VirtualMachineScaleSetExtensionProfile';
import { VirtualMachineScaleSetNetworkProfile } from './VirtualMachineScaleSetNetworkProfile';
import { VirtualMachineScaleSetOSProfile } from './VirtualMachineScaleSetOSProfile';
import { VirtualMachineScaleSetStorageProfile } from './VirtualMachineScaleSetStorageProfile';

/**
 * @description Describes a virtual machine scale set virtual machine profile.
 */
export interface VirtualMachineScaleSetVMProfile {
    /**
     * @description The virtual machine scale set OS profile.
     */
    osProfile: VirtualMachineScaleSetOSProfile;
    /**
     * @description The virtual machine scale set storage profile.
     */
    storageProfile: VirtualMachineScaleSetStorageProfile;
    /**
     * @description The virtual machine scale set network profile.
     */
    networkProfile: VirtualMachineScaleSetNetworkProfile;
    /**
     * @description The virtual machine scale set extension profile.
     */
    extensionProfile: VirtualMachineScaleSetExtensionProfile;
    /** @description Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     * @since 2017-03-30
     */
    diagnosticsProfile: DiagnosticsProfile;
    /** @description Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
     * @since 2017-03-30
     */
    licenseType: string;
    /** @description Specifies the priority for the virtual machines in the scale set. <br><br>Minimum api-version: 2017-10-30-preview
     * @since 2018-06-01
     */
    priority: VirtualMachinePriorityTypes | string;
    /** @description Specifies the eviction policy for virtual machines in a low priority scale set. <br><br>Minimum api-version: 2017-10-30-preview
     * @since 2018-06-01
     */
    evictionPolicy: VirtualMachineEvictionPolicyTypes | string;
    /** @description Specifies the billing related details of a Azure Spot VMSS. <br><br>Minimum api-version: 2019-03-01.
     * @since 2019-12-01
     */
    billingProfile: BillingProfile;
    /** @description Specifies Scheduled Event related configurations.
     * @since 2019-12-01
     */
    scheduledEventsProfile: ScheduledEventsProfile;
}
