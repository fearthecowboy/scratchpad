import { IPVersion } from "../enums/IPVersion";
import { Protocol } from "../enums/Protocol";
import { ConnectivityDestination } from './ConnectivityDestination';
import { ConnectivitySource } from './ConnectivitySource';
import { ProtocolConfiguration } from "./ProtocolConfiguration";

/**
 * @description Parameters that determine how the connectivity check will be performed.
 * @since 2017-11-01
 */
export interface ConnectivityParameters {
    source?: ConnectivitySource;
    destination?: ConnectivityDestination;
    /** @description Network protocol.
     * @since 2019-07-01
     */
    protocol: Protocol | string;
    /** @description Configuration of the protocol.
     * @since 2019-07-01
     */
    protocolConfiguration: ProtocolConfiguration;
    /** @description Preferred IP version of the connection.
     * @since 2019-12-01
     */
    preferredIPVersion: IPVersion | string;
}
