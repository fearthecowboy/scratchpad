import { SubResource } from './SubResource';
import { VpnConnection } from './VpnConnection';
import { BgpSettings } from './BgpSettings';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters for VpnGateway.
 */
export interface VpnGatewayProperties {
    /**
     * @description The VirtualHub to which the gateway belongs.
     */
    virtualHub: SubResource;
    /**
     * @description List of all vpn connections to the gateway.
     */
    connections: Array<VpnConnection>;
    /**
     * @description Local network gateway's BGP speaker settings.
     */
    bgpSettings: BgpSettings;
    /**
     * @description The provisioning state of the VPN gateway resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The scale unit for this vpn gateway.
     */
    vpnGatewayScaleUnit: int32;
}
