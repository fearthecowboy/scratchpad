import { ProvisioningState } from '../enums/ProvisioningState';
import { AddressSpace } from './AddressSpace';
import { RoutingConfiguration } from "./RoutingConfiguration";

/**
 * @description Parameters for P2SConnectionConfiguration.
 * @since 2019-12-01
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
    /** @description The Routing Configuration indicating the associated and propagated route tables on this connection.
     * @since 2020-04-01
     */
    routingConfiguration: RoutingConfiguration;
}
