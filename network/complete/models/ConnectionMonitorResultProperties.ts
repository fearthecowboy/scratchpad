import { ConnectionMonitorType } from "../enums/ConnectionMonitorType";
import { ProvisioningState } from '../enums/ProvisioningState';
import { ConnectionMonitorParameters } from './ConnectionMonitorParameters';

/**
 * @description Describes the properties of a connection monitor.
 * @since 2017-11-01
 */
export interface ConnectionMonitorResultProperties extends ConnectionMonitorParameters {
    /**
     * @description The provisioning state of the connection monitor.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The date and time when the connection monitor was started.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly startTime: dateTime;
    /**
     * @description The monitoring status of the connection monitor.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly monitoringStatus: string;
    /** @description Type of connection monitor.
     * @since 2019-12-01
     */
    readonly connectionMonitorType: ConnectionMonitorType | string;
}
