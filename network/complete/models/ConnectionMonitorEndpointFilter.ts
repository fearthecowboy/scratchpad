import { ConnectionMonitorEndpointFilterType } from '../enums/ConnectionMonitorEndpointFilterType';
import { ConnectionMonitorEndpointFilterItem } from './ConnectionMonitorEndpointFilterItem';

/**
 * @description Describes the connection monitor endpoint filter.
 * @since 2019-12-01
 */
export interface ConnectionMonitorEndpointFilter {
    /**
     * @description The behavior of the endpoint filter. Currently only 'Include' is supported.
     */
    type: ConnectionMonitorEndpointFilterType | string;
    /**
     * @description List of items in the filter.
     */
    items: Array<ConnectionMonitorEndpointFilterItem>;
}
