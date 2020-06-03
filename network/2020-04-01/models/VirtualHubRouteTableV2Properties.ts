import { VirtualHubRouteV2 } from './VirtualHubRouteV2';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters for VirtualHubRouteTableV2.
 */
export interface VirtualHubRouteTableV2Properties {
    /**
     * @description List of all routes.
     */
    routes: Array<VirtualHubRouteV2>;
    /**
     * @description List of all connections attached to this route table v2.
     */
    attachedConnections: Array<string>;
    /**
     * @description The provisioning state of the virtual hub route table v2 resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
