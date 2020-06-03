import { ConnectionMonitorResultProperties } from './ConnectionMonitorResultProperties';
/**
 * @description Information about the connection monitor.
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
    etag: string;
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
