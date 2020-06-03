import { VirtualMachineScaleSetPublicIPAddressConfigurationProperties } from './VirtualMachineScaleSetPublicIPAddressConfigurationProperties';
/**
 * @description Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
 */
export interface VirtualMachineScaleSetPublicIPAddressConfiguration {
    /**
     * @description The publicIP address configuration name.
     */
    name?: string;
    properties: VirtualMachineScaleSetPublicIPAddressConfigurationProperties;
}
