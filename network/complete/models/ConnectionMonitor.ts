import { ConnectionMonitorParameters } from './ConnectionMonitorParameters';

/**
 * @description Parameters that define the operation to create a connection monitor.
 * @since 2017-11-01
 */
export interface ConnectionMonitor {
    /**
     * @description Connection monitor location.
     */
    location: string;
    /**
     * @description Connection monitor tags.
     */
    tags: Dictionary<string>;
    properties?: ConnectionMonitorParameters;
}
