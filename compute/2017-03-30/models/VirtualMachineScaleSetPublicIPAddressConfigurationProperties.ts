import { VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings } from './VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings';
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
}
