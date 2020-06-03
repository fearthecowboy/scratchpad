import { ConnectionState } from '../enums/ConnectionState';
import { EvaluationState } from '../enums/EvaluationState';
import { ConnectivityHop } from './ConnectivityHop';
/**
 * @description Connection state snapshot.
 */
export interface ConnectionStateSnapshot {
    /**
     * @description The connection state.
     */
    connectionState: ConnectionState | string;
    /**
     * @description The start time of the connection snapshot.
     */
    startTime: dateTime;
    /**
     * @description The end time of the connection snapshot.
     */
    endTime: dateTime;
    /**
     * @description Connectivity analysis evaluation state.
     */
    evaluationState: EvaluationState | string;
    /**
     * @description Average latency in ms.
     */
    avgLatencyInMs: int64;
    /**
     * @description Minimum latency in ms.
     */
    minLatencyInMs: int64;
    /**
     * @description Maximum latency in ms.
     */
    maxLatencyInMs: int64;
    /**
     * @description The number of sent probes.
     */
    probesSent: int64;
    /**
     * @description The number of failed probes.
     */
    probesFailed: int64;
    /**
     * @description List of hops between the source and the destination.
     */
    readonly hops: Array<ConnectivityHop>;
}
