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
     * @description List of hops between the source and the destination.
     */
    readonly hops: Array<ConnectivityHop>;
}
