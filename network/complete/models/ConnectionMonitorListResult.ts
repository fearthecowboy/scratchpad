import { ConnectionMonitorResult } from './ConnectionMonitorResult';

/**
 * @description List of connection monitors.
 * @since 2017-11-01
 */
export interface ConnectionMonitorListResult {
    /**
     * @description Information about connection monitors.
     */
    value: Array<ConnectionMonitorResult>;
}
