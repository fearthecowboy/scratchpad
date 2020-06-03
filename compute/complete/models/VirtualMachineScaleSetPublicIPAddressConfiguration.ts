import { VirtualMachineScaleSetPublicIPAddressConfigurationProperties } from './VirtualMachineScaleSetPublicIPAddressConfigurationProperties';

/**
 * @description Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
 * @since 2017-03-30
 */
export interface VirtualMachineScaleSetPublicIPAddressConfiguration {
    /**
     * @description The publicIP address configuration name.
     */
    name?: string;
    properties: VirtualMachineScaleSetPublicIPAddressConfigurationProperties;
}
