import { RouteNextHopType } from '../enums/RouteNextHopType';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Route resource.
 */
export interface RoutePropertiesFormat {
    /**
     * @description The destination CIDR to which the route applies.
     */
    addressPrefix: string;
    /**
     * @description The type of Azure hop the packet should be sent to.
     */
    nextHopType?: RouteNextHopType | string;
    /**
     * @description The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    nextHopIpAddress: string;
    /**
     * @description The provisioning state of the route resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
