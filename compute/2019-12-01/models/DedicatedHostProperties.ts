import { SubResourceReadOnly } from './SubResourceReadOnly';
import { DedicatedHostLicenseTypes } from '../enums/DedicatedHostLicenseTypes';
import { DedicatedHostInstanceView } from './DedicatedHostInstanceView';
/**
 * @description Properties of the dedicated host.
 */
export interface DedicatedHostProperties {
    /**
     * @description Fault domain of the dedicated host within a dedicated host group.
     */
    platformFaultDomain: int32 & Minimum<0> & Maximum<2>;
    /**
     * @description Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
     */
    autoReplaceOnFailure: boolean;
    /**
     * @description A unique id generated and assigned to the dedicated host by the platform. <br><br> Does not change throughout the lifetime of the host.
     */
    readonly hostId: string ;
    /**
     * @description A list of references to all virtual machines in the Dedicated Host.
     */
    readonly virtualMachines: Array<SubResourceReadOnly>;
    /**
     * @description Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None**
     */
    licenseType: DedicatedHostLicenseTypes;
    /**
     * @description The date when the host was first provisioned.
     */
    readonly provisioningTime: dateTime ;
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string ;
    /**
     * @description The dedicated host instance view.
     */
    readonly instanceView: DedicatedHostInstanceView;
}
