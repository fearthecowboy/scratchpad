import { CircuitConnectionStatus } from '../enums/CircuitConnectionStatus';
import { ProvisioningState } from '../enums/ProvisioningState';
import { Ipv6CircuitConnectionConfig } from "./Ipv6CircuitConnectionConfig";
import { SubResource } from './SubResource';

/**
 * @description Properties of the express route circuit connection.
 * @since 2019-07-01
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
     * @description Express Route Circuit connection state.
     */
    circuitConnectionStatus: CircuitConnectionStatus | string;
    /**
     * @description The provisioning state of the express route circuit connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description IPv6 Address PrefixProperties of the express route circuit connection.
     * @since 2019-12-01
     */
    ipv6CircuitConnectionConfig: Ipv6CircuitConnectionConfig;
}
