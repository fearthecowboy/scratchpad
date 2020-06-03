import { AdditionalCapabilities } from "./AdditionalCapabilities";
import { AutomaticRepairsPolicy } from "./AutomaticRepairsPolicy";
import { ScaleInPolicy } from "./ScaleInPolicy";
import { SubResource } from "./SubResource";
import { UpgradePolicy } from './UpgradePolicy';
import { VirtualMachineScaleSetVMProfile } from './VirtualMachineScaleSetVMProfile';

/**
 * @description Describes the properties of a Virtual Machine Scale Set.
 */
export interface VirtualMachineScaleSetProperties {
    /**
     * @description The upgrade policy.
     */
    upgradePolicy: UpgradePolicy;
    /**
     * @description The virtual machine profile.
     */
    virtualMachineProfile: VirtualMachineScaleSetVMProfile;
    /**
     * @description The provisioning state, which only appears in the response.
     * @Readonly  '2016-03-30' - added readonly
     */
    readonly provisioningState: string;
    /**
     * @description Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     * @deleted 2017-03-30
     */
    overProvision: boolean;
    /** @description Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     * @since 2017-03-30
     */
    overprovision: boolean;
    /** @description Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
     * @since 2017-03-30
     */
    readonly uniqueId: string;
    /** @description When true this limits the scale set to a single placement group, of max size 100 virtual machines.
     * @since 2017-03-30
     */
    singlePlacementGroup: boolean;
    /** @description Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
     * @since 2018-06-01
     */
    zoneBalance: boolean;
    /** @description Fault Domain count for each placement group.
     * @since 2018-06-01
     */
    platformFaultDomainCount: int32;
    /** @description Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     * @since 2018-06-01
     */
    proximityPlacementGroup: SubResource;
    /** @description Policy for automatic repairs.
     * @since 2019-12-01
     */
    automaticRepairsPolicy: AutomaticRepairsPolicy;
    /** @description When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
     * @since 2019-12-01
     */
    doNotRunExtensionsOnOverprovisionedVMs: boolean;
    /** @description Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     * @since 2019-12-01
     */
    additionalCapabilities: AdditionalCapabilities;
    /** @description Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
     * @since 2019-12-01
     */
    scaleInPolicy: ScaleInPolicy;
}
