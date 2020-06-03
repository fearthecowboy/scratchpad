import { SubResource } from './SubResource';
import { CircuitConnectionStatus } from '../enums/CircuitConnectionStatus';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the peer express route circuit connection.
 */
export interface PeerExpressRouteCircuitConnectionPropertiesFormat {
    /**
     * @description Reference to Express Route Circuit Private Peering Resource of the circuit.
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
     * @description Express Route Circuit connection state.
     */
    circuitConnectionStatus: CircuitConnectionStatus | string;
    /**
     * @description The name of the express route circuit connection resource.
     */
    connectionName: string;
    /**
     * @description The resource guid of the authorization used for the express route circuit connection.
     */
    authResourceGuid: string;
    /**
     * @description The provisioning state of the peer express route circuit connection resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
