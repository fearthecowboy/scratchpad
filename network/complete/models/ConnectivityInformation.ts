import { ConnectionStatus } from '../enums/ConnectionStatus';
import { ConnectivityHop } from './ConnectivityHop';

/**
 * @description Information on the connectivity status.
 * @since 2017-11-01
 */
export interface ConnectivityInformation {
    /**
     * @description List of hops between the source and the destination.
     */
    readonly hops: Array<ConnectivityHop>;
    /**
     * @description The connection status.
     */
    readonly connectionStatus: ConnectionStatus | string;
    /**
     * @description Average latency in milliseconds.
     */
    readonly avgLatencyInMs: int64;
    /**
     * @description Minimum latency in milliseconds.
     */
    readonly minLatencyInMs: int64;
    /**
     * @description Maximum latency in milliseconds.
     */
    readonly maxLatencyInMs: int64;
    /**
     * @description Total number of probes sent.
     */
    readonly probesSent: int64;
    /**
     * @description Number of failed probes.
     */
    readonly probesFailed: int64;
}
