import { SubResource } from './SubResource';
import { VirtualApplianceNicProperties } from './VirtualApplianceNicProperties';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Network Virtual Appliance definition.
 */
export interface NetworkVirtualAppliancePropertiesFormat {
    /**
     * @description BootStrapConfigurationBlob storage URLs.
     */
    bootStrapConfigurationBlob: Array<string>;
    /**
     * @description The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    virtualHub: SubResource;
    /**
     * @description CloudInitConfigurationBlob storage URLs.
     */
    cloudInitConfigurationBlob: Array<string>;
    /**
     * @description VirtualAppliance ASN.
     */
    virtualApplianceAsn: int64 & Minimum<0> & Maximum<4294967295>;
    /**
     * @description List of Virtual Appliance Network Interfaces.
     */
    readonly virtualApplianceNics: Array<VirtualApplianceNicProperties>;
    /**
     * @description The provisioning state of the resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
