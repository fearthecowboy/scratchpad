import { ConnectionStateSnapshot } from './ConnectionStateSnapshot';
/**
 * @description List of connection states snapshots.
 */
export interface ConnectionMonitorQueryResult {
    /**
     * @description Information about connection states.
     */
    states: Array<ConnectionStateSnapshot>;
}
