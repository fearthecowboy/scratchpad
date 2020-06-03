import { VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings } from './VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings';
import { VirtualMachineScaleSetIpTag } from './VirtualMachineScaleSetIpTag';
import { SubResource } from './SubResource';
import { IPVersion } from '../enums/IPVersion';
/**
 * @description Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationProperties {
    /**
     * @description The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes: int32;
    /**
     * @description The dns settings to be applied on the publicIP addresses .
     */
    dnsSettings: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
    /**
     * @description The list of IP tags associated with the public IP address.
     */
    ipTags: Array<VirtualMachineScaleSetIpTag>;
    /**
     * @description The PublicIPPrefix from which to allocate publicIP addresses.
     */
    publicIPPrefix: SubResource;
    /**
     * @description Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion: IPVersion | string;
}
