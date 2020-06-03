import { ConnectionMonitorSource } from './ConnectionMonitorSource';
import { ConnectionMonitorDestination } from './ConnectionMonitorDestination';
/**
 * @description Parameters that define the operation to create a connection monitor.
 */
export interface ConnectionMonitorParameters {
    source?: ConnectionMonitorSource;
    destination?: ConnectionMonitorDestination;
    /**
     * @description Determines if the connection monitor will start automatically once created.
     */
    autoStart: boolean;
    /**
     * @description Monitoring interval in seconds.
     */
    monitoringIntervalInSeconds: int64;
}
