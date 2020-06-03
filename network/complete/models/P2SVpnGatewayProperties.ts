import { ProvisioningState } from '../enums/ProvisioningState';
import { AddressSpace } from './AddressSpace';
import { P2SConnectionConfiguration } from "./P2SConnectionConfiguration";
import { SubResource } from './SubResource';
import { VpnClientConnectionHealth } from './VpnClientConnectionHealth';

/**
 * @description Parameters for P2SVpnGateway.
 * @since 2019-07-01
 */
export interface P2SVpnGatewayProperties {
    /**
     * @description The VirtualHub to which the gateway belongs.
     */
    virtualHub: SubResource;
    /**
     * @description The provisioning state of the P2S VPN gateway resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The scale unit for this p2s vpn gateway.
     */
    vpnGatewayScaleUnit: int32;
    /**
     * @description The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
     * @deleted 2019-12-01
     */
    p2SVpnServerConfiguration: SubResource;
    /**
     * @description The reference of the address space resource which represents Address space for P2S VpnClient.
     * @deleted 2019-12-01
     */
    vpnClientAddressPool: AddressSpace;
    /**
     * @description The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
     * @deleted 2019-12-01
     */
    customRoutes: AddressSpace;
    /**
     * @description All P2S VPN clients' connection health status.
     */
    readonly vpnClientConnectionHealth: VpnClientConnectionHealth;
    /** @description List of all p2s connection configurations of the gateway.
     * @since 2019-12-01
     */
    p2SConnectionConfigurations: Array<P2SConnectionConfiguration>;
    /** @description The VpnServerConfiguration to which the p2sVpnGateway is attached to.
     * @since 2019-12-01
     */
    vpnServerConfiguration: SubResource;
}
