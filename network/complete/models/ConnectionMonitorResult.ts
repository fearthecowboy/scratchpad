import { ConnectionMonitorResultProperties } from './ConnectionMonitorResultProperties';

/**
 * @description Information about the connection monitor.
 * @since 2017-11-01
 */
export interface ConnectionMonitorResult {
    /**
     * @description Name of the connection monitor.
     */
    readonly name: string ;
    /**
     * @description ID of the connection monitor.
     */
    readonly id: string ;
    /**
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /**
     * @description Connection monitor type.
     */
    readonly type: string ;
    /**
     * @description Connection monitor location.
     */
    location: string;
    /**
     * @description Connection monitor tags.
     */
    tags: Dictionary<string>;
    properties: ConnectionMonitorResultProperties;
}
