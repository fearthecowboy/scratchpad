
/**
 * @extensible
 * @description The type of Azure hop the packet should be sent to.
 */
export enum RouteNextHopType {
    /**
     *
     */
    VirtualNetworkGateway = 'VirtualNetworkGateway',
    /**
     *
     */
    VnetLocal = 'VnetLocal',
    /**
     *
     */
    Internet = 'Internet',
    /**
     *
     */
    VirtualAppliance = 'VirtualAppliance',
    /**
     *
     */
    None = 'None'
}
