import { ConnectionMonitorSourceStatus } from '../enums/ConnectionMonitorSourceStatus';
import { ConnectionStateSnapshot } from './ConnectionStateSnapshot';
/**
 * @description List of connection states snapshots.
 */
export interface ConnectionMonitorQueryResult {
    /**
     * @description Status of connection monitor source.
     */
    sourceStatus: ConnectionMonitorSourceStatus | string;
    /**
     * @description Information about connection states.
     */
    states: Array<ConnectionStateSnapshot>;
}
