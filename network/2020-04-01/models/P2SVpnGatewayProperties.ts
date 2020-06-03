import { SubResource } from './SubResource';
import { P2SConnectionConfiguration } from './P2SConnectionConfiguration';
import { ProvisioningState } from '../enums/ProvisioningState';
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
     * @description List of all p2s connection configurations of the gateway.
     */
    p2SConnectionConfigurations: Array<P2SConnectionConfiguration>;
    /**
     * @description The provisioning state of the P2S VPN gateway resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The scale unit for this p2s vpn gateway.
     */
    vpnGatewayScaleUnit: int32;
    /**
     * @description The VpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    vpnServerConfiguration: SubResource;
    /**
     * @description All P2S VPN clients' connection health status.
     */
    readonly vpnClientConnectionHealth: VpnClientConnectionHealth;
}
