import { ConnectivitySource } from './ConnectivitySource';
import { ConnectivityDestination } from './ConnectivityDestination';
import { Protocol } from '../enums/Protocol';
import { ProtocolConfiguration } from './ProtocolConfiguration';
import { IPVersion } from '../enums/IPVersion';
/**
 * @description Parameters that determine how the connectivity check will be performed.
 */
export interface ConnectivityParameters {
    /**
     * @description The source of the connection.
     */
    source?: ConnectivitySource;
    /**
     * @description The destination of connection.
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
    /**
     * @description Preferred IP version of the connection.
     */
    preferredIPVersion: IPVersion | string;
}
