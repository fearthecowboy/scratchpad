import { VirtualMachineScaleSetUpdateOSProfile } from './VirtualMachineScaleSetUpdateOSProfile';
import { VirtualMachineScaleSetUpdateStorageProfile } from './VirtualMachineScaleSetUpdateStorageProfile';
import { VirtualMachineScaleSetUpdateNetworkProfile } from './VirtualMachineScaleSetUpdateNetworkProfile';
import { DiagnosticsProfile } from './DiagnosticsProfile';
import { VirtualMachineScaleSetExtensionProfile } from './VirtualMachineScaleSetExtensionProfile';
import { BillingProfile } from './BillingProfile';
import { ScheduledEventsProfile } from './ScheduledEventsProfile';
/**
 * @description Describes a virtual machine scale set virtual machine profile.
 */
export interface VirtualMachineScaleSetUpdateVMProfile {
    /**
     * @description The virtual machine scale set OS profile.
     */
    osProfile: VirtualMachineScaleSetUpdateOSProfile;
    /**
     * @description The virtual machine scale set storage profile.
     */
    storageProfile: VirtualMachineScaleSetUpdateStorageProfile;
    /**
     * @description The virtual machine scale set network profile.
     */
    networkProfile: VirtualMachineScaleSetUpdateNetworkProfile;
    /**
     * @description The virtual machine scale set diagnostics profile.
     */
    diagnosticsProfile: DiagnosticsProfile;
    /**
     * @description The virtual machine scale set extension profile.
     */
    extensionProfile: VirtualMachineScaleSetExtensionProfile;
    /**
     * @description The license type, which is for bring your own license scenario.
     */
    licenseType: string;
    /**
     * @description Specifies the billing related details of a Azure Spot VMSS. <br><br>Minimum api-version: 2019-03-01.
     */
    billingProfile: BillingProfile;
    /**
     * @description Specifies Scheduled Event related configurations.
     */
    scheduledEventsProfile: ScheduledEventsProfile;
}
