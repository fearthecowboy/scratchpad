import { ConnectionMonitorResult } from './ConnectionMonitorResult';
/**
 * @description List of connection monitors.
 */
export interface ConnectionMonitorListResult {
    /**
     * @description Information about connection monitors.
     */
    value: Array<ConnectionMonitorResult>;
}
