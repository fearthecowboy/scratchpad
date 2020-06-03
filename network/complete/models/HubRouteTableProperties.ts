import { ProvisioningState } from '../enums/ProvisioningState';
import { HubRoute } from './HubRoute';
import { SubResource } from './SubResource';
/**
 * @description Parameters for RouteTable.
 * @since 2020-04-01
 */
export interface HubRouteTableProperties {
    /**
     * @description List of all routes.
     */
    routes: Array<HubRoute>;
    /**
     * @description List of labels associated with this route table.
     */
    labels: Array<string>;
    /**
     * @description List of all connections associated with this route table.
     */
    readonly associatedConnections: Array<SubResource>;
    /**
     * @description List of all connections that advertise to this route table.
     */
    readonly propagatingConnections: Array<SubResource>;
    /**
     * @description The provisioning state of the RouteTable resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
