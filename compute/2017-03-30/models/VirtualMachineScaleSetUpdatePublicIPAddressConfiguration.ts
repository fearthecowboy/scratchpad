import { VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties } from './VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties';
/**
 * @description Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachineScaleSetUpdatePublicIPAddressConfiguration {
    /**
     * @description The publicIP address configuration name.
     */
    name: string;
    properties: VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties;
}
