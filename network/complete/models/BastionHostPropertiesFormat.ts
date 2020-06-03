import { ProvisioningState } from '../enums/ProvisioningState';
import { BastionHostIPConfiguration } from './BastionHostIPConfiguration';

/**
 * @description Properties of the Bastion Host.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
