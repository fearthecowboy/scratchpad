import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
import { AddressSpace } from './AddressSpace';
import { VpnClientConnectionHealth } from './VpnClientConnectionHealth';
/**
 * @description Parameters for P2SVpnGateway.
 */
export interface P2SVpnGatewayProperties {
    /**
     * @description The VirtualHub to which the gateway belongs.
     */
    virtualHub: SubResource;
    /**
     * @description The provisioning state of the P2S VPN gateway resource.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description The scale unit for this p2s vpn gateway.
     */
    vpnGatewayScaleUnit: int32;
    /**
     * @description The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    p2SVpnServerConfiguration: SubResource;
    /**
     * @description The reference of the address space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool: AddressSpace;
    /**
     * @description The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
     */
    customRoutes: AddressSpace;
    /**
     * @description All P2S VPN clients' connection health status.
     */
    readonly vpnClientConnectionHealth: VpnClientConnectionHealth;
}
