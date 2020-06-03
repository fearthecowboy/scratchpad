import { ExpressRoutePortsEncapsulation } from '../enums/ExpressRoutePortsEncapsulation';
import { ProvisioningState } from '../enums/ProvisioningState';
import { ExpressRouteLink } from './ExpressRouteLink';
import { SubResource } from './SubResource';

/**
 * ExpressRoutePort Properties
 * @description Properties specific to ExpressRoutePort resources.
 * @since 2019-07-01
 */
export interface ExpressRoutePortPropertiesFormat {
    /**
     * @description The name of the peering location that the ExpressRoutePort is mapped to physically.
     */
    peeringLocation: string;
    /**
     * @description Bandwidth of procured ports in Gbps.
     */
    bandwidthInGbps: int64;
    /**
     * @description Aggregate Gbps of associated circuit bandwidths.
     */
    readonly provisionedBandwidthInGbps: double;
    /**
     * @description Maximum transmission unit of the physical port pair(s).
     */
    readonly mtu: string ;
    /**
     * @description Encapsulation method on physical ports.
     */
    encapsulation: ExpressRoutePortsEncapsulation | string;
    /**
     * @description Ether type of the physical port.
     */
    readonly etherType: string ;
    /**
     * @description Date of the physical port allocation to be used in Letter of Authorization.
     */
    readonly allocationDate: string ;
    /**
     * @description The set of physical links of the ExpressRoutePort resource.
     */
    links: Array<ExpressRouteLink>;
    /**
     * @description Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
     */
    readonly circuits: Array<SubResource>;
    /**
     * @description The provisioning state of the express route port resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The resource GUID property of the express route port resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
}
