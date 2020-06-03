import { ConnectionMonitorEndpointFilterItemType } from '../enums/ConnectionMonitorEndpointFilterItemType';
/**
 * @description Describes the connection monitor endpoint filter item.
 */
export interface ConnectionMonitorEndpointFilterItem {
    /**
     * @description The type of item included in the filter. Currently only 'AgentAddress' is supported.
     */
    type: ConnectionMonitorEndpointFilterItemType | string;
    /**
     * @description The address of the filter item.
     */
    address: string;
}
