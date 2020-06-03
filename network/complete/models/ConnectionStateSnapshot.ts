import { ConnectionState } from '../enums/ConnectionState';
import { EvaluationState } from '../enums/EvaluationState';
import { ConnectivityHop } from './ConnectivityHop';

/**
 * @description Connection state snapshot.
 * @since 2017-11-01
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
     * @description List of hops between the source and the destination.
     */
    readonly hops: Array<ConnectivityHop>;
    /** @description Average latency in ms.
     * @since 2019-07-01
     */
    avgLatencyInMs: int64;
    /** @description Minimum latency in ms.
     * @since 2019-07-01
     */
    minLatencyInMs: int64;
    /** @description Maximum latency in ms.
     * @since 2019-07-01
     */
    maxLatencyInMs: int64;
    /** @description The number of sent probes.
     * @since 2019-07-01
     */
    probesSent: int64;
    /** @description The number of failed probes.
     * @since 2019-07-01
     */
    probesFailed: int64;
}
