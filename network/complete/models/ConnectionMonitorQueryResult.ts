import { ConnectionMonitorSourceStatus } from "../enums/ConnectionMonitorSourceStatus";
import { ConnectionStateSnapshot } from './ConnectionStateSnapshot';

/**
 * @description List of connection states snapshots.
 * @since 2017-11-01
 */
export interface ConnectionMonitorQueryResult {
    /**
     * @description Information about connection states.
     */
    states: Array<ConnectionStateSnapshot>;
    /** @description Status of connection monitor source.
     * @since 2019-07-01
     */
    sourceStatus: ConnectionMonitorSourceStatus | string;
}
