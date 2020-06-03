
/**
 * @description Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
 */
export interface VirtualNetworkBgpCommunities {
    /**
     * @description The BGP community associated with the virtual network.
     */
    virtualNetworkCommunity?: string;
    /**
     * @description The BGP community associated with the region of the virtual network.
     */
    readonly regionalCommunity: string ;
}
