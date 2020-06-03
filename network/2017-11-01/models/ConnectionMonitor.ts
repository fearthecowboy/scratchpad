import { ConnectionMonitorParameters } from './ConnectionMonitorParameters';
/**
 * @description Parameters that define the operation to create a connection monitor.
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
