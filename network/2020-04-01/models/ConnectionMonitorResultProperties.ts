import { ConnectionMonitorParameters } from './ConnectionMonitorParameters';
import { ProvisioningState } from '../enums/ProvisioningState';
import { ConnectionMonitorType } from '../enums/ConnectionMonitorType';
/**
 * @description Describes the properties of a connection monitor.
 */
export interface ConnectionMonitorResultProperties extends ConnectionMonitorParameters {
    /**
     * @description The provisioning state of the connection monitor.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The date and time when the connection monitor was started.
     */
    readonly startTime: dateTime ;
    /**
     * @description The monitoring status of the connection monitor.
     */
    readonly monitoringStatus: string ;
    /**
     * @description Type of connection monitor.
     */
    readonly connectionMonitorType: ConnectionMonitorType | string;
}
