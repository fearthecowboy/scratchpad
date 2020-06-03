import { ConnectionMonitorDestination } from './ConnectionMonitorDestination';
import { ConnectionMonitorEndpoint } from "./ConnectionMonitorEndpoint";
import { ConnectionMonitorOutput } from "./ConnectionMonitorOutput";
import { ConnectionMonitorSource } from './ConnectionMonitorSource';
import { ConnectionMonitorTestConfiguration } from "./ConnectionMonitorTestConfiguration";
import { ConnectionMonitorTestGroup } from "./ConnectionMonitorTestGroup";

/**
 * @description Parameters that define the operation to create a connection monitor.
 * @since 2017-11-01
 */
export interface ConnectionMonitorParameters {
    /**
     * @Optional  '2019-12-01' - made property required
     */
    source: ConnectionMonitorSource;
    /**
     * @Optional  '2019-12-01' - made property required
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
    /** @description List of connection monitor endpoints.
     * @since 2019-12-01
     */
    endpoints: Array<ConnectionMonitorEndpoint>;
    /** @description List of connection monitor test configurations.
     * @since 2019-12-01
     */
    testConfigurations: Array<ConnectionMonitorTestConfiguration>;
    /** @description List of connection monitor test groups.
     * @since 2019-12-01
     */
    testGroups: Array<ConnectionMonitorTestGroup>;
    /** @description List of connection monitor outputs.
     * @since 2019-12-01
     */
    outputs: Array<ConnectionMonitorOutput>;
    /** @description Optional notes to be associated with the connection monitor.
     * @since 2019-12-01
     */
    notes: string;
}
