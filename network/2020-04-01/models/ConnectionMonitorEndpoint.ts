import { ConnectionMonitorEndpointFilter } from './ConnectionMonitorEndpointFilter';
/**
 * @description Describes the connection monitor endpoint.
 */
export interface ConnectionMonitorEndpoint {
    /**
     * @description The name of the connection monitor endpoint.
     */
    name?: string;
    /**
     * @description Resource ID of the connection monitor endpoint.
     */
    resourceId: string;
    /**
     * @description Address of the connection monitor endpoint (IP or domain name).
     */
    address: string;
    /**
     * @description Filter for sub-items within the endpoint.
     */
    filter: ConnectionMonitorEndpointFilter;
}
