import { ConnectionMonitorParameters } from './ConnectionMonitorParameters';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Describes the properties of a connection monitor.
 */
export interface ConnectionMonitorResultProperties extends ConnectionMonitorParameters {
    /**
     * @description The provisioning state of the connection monitor.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description The date and time when the connection monitor was started.
     */
    startTime: dateTime;
    /**
     * @description The monitoring status of the connection monitor.
     */
    monitoringStatus: string;
}
