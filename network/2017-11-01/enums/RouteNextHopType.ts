
/**
 * @extensible
 * @description The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
 * @todo temporary-reuse-marker
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
