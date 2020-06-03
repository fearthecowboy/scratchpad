
/**
 * @description Describes a virtual machines scale sets network configuration's DNS settings.
 * @since 2017-03-30
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
    /**
     * @description The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created
     */
    domainNameLabel?: string;
}
