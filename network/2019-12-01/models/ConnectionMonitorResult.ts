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
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
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
    /**
     * @description Properties of the connection monitor result.
     */
    properties: ConnectionMonitorResultProperties;
}
