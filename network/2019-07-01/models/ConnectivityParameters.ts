import { ConnectivitySource } from './ConnectivitySource';
import { ConnectivityDestination } from './ConnectivityDestination';
import { Protocol } from '../enums/Protocol';
import { ProtocolConfiguration } from './ProtocolConfiguration';
/**
 * @description Parameters that determine how the connectivity check will be performed.
 */
export interface ConnectivityParameters {
    /**
     * @description Describes the source of the connection.
     */
    source?: ConnectivitySource;
    /**
     * @description Describes the destination of connection.
     */
    destination?: ConnectivityDestination;
    /**
     * @description Network protocol.
     */
    protocol: Protocol | string;
    /**
     * @description Configuration of the protocol.
     */
    protocolConfiguration: ProtocolConfiguration;
}
