import { ConnectionMonitorSource } from './ConnectionMonitorSource';
import { ConnectionMonitorDestination } from './ConnectionMonitorDestination';
import { ConnectionMonitorEndpoint } from './ConnectionMonitorEndpoint';
import { ConnectionMonitorTestConfiguration } from './ConnectionMonitorTestConfiguration';
import { ConnectionMonitorTestGroup } from './ConnectionMonitorTestGroup';
import { ConnectionMonitorOutput } from './ConnectionMonitorOutput';
/**
 * @description Parameters that define the operation to create a connection monitor.
 */
export interface ConnectionMonitorParameters {
    /**
     * @description Describes the source of connection monitor.
     */
    source: ConnectionMonitorSource;
    /**
     * @description Describes the destination of connection monitor.
     */
    destination: ConnectionMonitorDestination;
    /**
     * @description Determines if the connection monitor will start automatically once created.
     */
    autoStart: boolean;
    /**
     * @description Monitoring interval in seconds.
     */
    monitoringIntervalInSeconds: int64;
    /**
     * @description List of connection monitor endpoints.
     */
    endpoints: Array<ConnectionMonitorEndpoint>;
    /**
     * @description List of connection monitor test configurations.
     */
    testConfigurations: Array<ConnectionMonitorTestConfiguration>;
    /**
     * @description List of connection monitor test groups.
     */
    testGroups: Array<ConnectionMonitorTestGroup>;
    /**
     * @description List of connection monitor outputs.
     */
    outputs: Array<ConnectionMonitorOutput>;
    /**
     * @description Optional notes to be associated with the connection monitor.
     */
    notes: string;
}
