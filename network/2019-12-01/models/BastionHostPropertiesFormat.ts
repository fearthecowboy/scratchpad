import { BastionHostIPConfiguration } from './BastionHostIPConfiguration';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the Bastion Host.
 */
export interface BastionHostPropertiesFormat {
    /**
     * @description IP configuration of the Bastion Host resource.
     */
    ipConfigurations: Array<BastionHostIPConfiguration>;
    /**
     * @description FQDN for the endpoint on which bastion host is accessible.
     */
    dnsName: string;
    /**
     * @description The provisioning state of the bastion host resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
