import { AddressSpace } from './AddressSpace';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters for P2SConnectionConfiguration.
 */
export interface P2SConnectionConfigurationProperties {
    /**
     * @description The reference to the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool: AddressSpace;
    /**
     * @description The provisioning state of the P2SConnectionConfiguration resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
