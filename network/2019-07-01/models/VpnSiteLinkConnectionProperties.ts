import { SubResource } from './SubResource';
import { VpnConnectionStatus } from '../enums/VpnConnectionStatus';
import { VirtualNetworkGatewayConnectionProtocol } from '../enums/VirtualNetworkGatewayConnectionProtocol';
import { IpsecPolicy } from './IpsecPolicy';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters for VpnConnection.
 */
export interface VpnSiteLinkConnectionProperties {
    /**
     * @description Id of the connected vpn site link.
     */
    vpnSiteLink: SubResource;
    /**
     * @description Routing weight for vpn connection.
     */
    routingWeight: int32;
    /**
     * @description The connection status.
     */
    connectionStatus: VpnConnectionStatus | string;
    /**
     * @description Connection protocol used for this connection.
     */
    vpnConnectionProtocolType: VirtualNetworkGatewayConnectionProtocol | string;
    /**
     * @description Ingress bytes transferred.
     */
    readonly ingressBytesTransferred: int64;
    /**
     * @description Egress bytes transferred.
     */
    readonly egressBytesTransferred: int64;
    /**
     * @description Expected bandwidth in MBPS.
     */
    connectionBandwidth: int32;
    /**
     * @description SharedKey for the vpn connection.
     */
    sharedKey: string;
    /**
     * @description EnableBgp flag.
     */
    enableBgp: boolean;
    /**
     * @description Enable policy-based traffic selectors.
     */
    usePolicyBasedTrafficSelectors: boolean;
    /**
     * @description The IPSec Policies to be considered by this connection.
     */
    ipsecPolicies: Array<IpsecPolicy>;
    /**
     * @description EnableBgp flag.
     */
    enableRateLimiting: boolean;
    /**
     * @description Use local azure ip to initiate connection.
     */
    useLocalAzureIpAddress: boolean;
    /**
     * @description The provisioning state of the VPN site link connection resource.
     */
    provisioningState: ProvisioningState | string;
}
