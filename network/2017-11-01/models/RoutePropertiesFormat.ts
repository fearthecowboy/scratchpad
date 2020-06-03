import { RouteNextHopType } from '../enums/RouteNextHopType';
/**
 * @description Route resource
 */
export interface RoutePropertiesFormat {
    /**
     * @description The destination CIDR to which the route applies.
     */
    addressPrefix: string;
    /**
     * @description The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
     */
    nextHopType?: RouteNextHopType | string;
    /**
     * @description The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    nextHopIpAddress: string;
    /**
     * @description The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
