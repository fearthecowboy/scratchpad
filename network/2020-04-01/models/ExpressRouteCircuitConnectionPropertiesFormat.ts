import { SubResource } from './SubResource';
import { Ipv6CircuitConnectionConfig } from './Ipv6CircuitConnectionConfig';
import { CircuitConnectionStatus } from '../enums/CircuitConnectionStatus';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the express route circuit connection.
 */
export interface ExpressRouteCircuitConnectionPropertiesFormat {
    /**
     * @description Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    expressRouteCircuitPeering: SubResource;
    /**
     * @description Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    peerExpressRouteCircuitPeering: SubResource;
    /**
     * @description /29 IP address space to carve out Customer addresses for tunnels.
     */
    addressPrefix: string;
    /**
     * @description The authorization key.
     */
    authorizationKey: string;
    /**
     * @description IPv6 Address PrefixProperties of the express route circuit connection.
     */
    ipv6CircuitConnectionConfig: Ipv6CircuitConnectionConfig;
    /**
     * @description Express Route Circuit connection state.
     */
    circuitConnectionStatus: CircuitConnectionStatus | string;
    /**
     * @description The provisioning state of the express route circuit connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
