import { VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings } from './VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings';
import { VirtualMachineScaleSetIpTag } from './VirtualMachineScaleSetIpTag';
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
}
