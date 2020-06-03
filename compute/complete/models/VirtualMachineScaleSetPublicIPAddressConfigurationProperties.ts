import { IPVersion } from "../enums/IPVersion";
import { SubResource } from "./SubResource";
import { VirtualMachineScaleSetIpTag } from "./VirtualMachineScaleSetIpTag";
import { VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings } from './VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings';

/**
 * @description Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
 * @since 2017-03-30
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
    /** @description The list of IP tags associated with the public IP address.
     * @since 2018-06-01
     */
    ipTags: Array<VirtualMachineScaleSetIpTag>;
    /** @description The PublicIPPrefix from which to allocate publicIP addresses.
     * @since 2019-12-01
     */
    publicIPPrefix: SubResource;
    /** @description Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
     * @since 2019-12-01
     */
    publicIPAddressVersion: IPVersion | string;
}
