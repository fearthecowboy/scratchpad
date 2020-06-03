import { ProvisioningState } from '../enums/ProvisioningState';
import { BgpSettings } from './BgpSettings';
import { SubResource } from './SubResource';
import { VpnConnection } from './VpnConnection';

/**
 * @description Parameters for VpnGateway.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The scale unit for this vpn gateway.
     */
    vpnGatewayScaleUnit: int32;
}
