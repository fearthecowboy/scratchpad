
/**
 * @description Gateway routing details.
 */
export interface GatewayRoute {
    /**
     * @description The gateway's local address.
     */
    readonly localAddress: string ;
    /**
     * @description The route's network prefix.
     */
    readonly network: string ;
    /**
     * @description The route's next hop.
     */
    readonly nextHop: string ;
    /**
     * @description The peer this route was learned from.
     */
    readonly sourcePeer: string ;
    /**
     * @description The source this route was learned from.
     */
    readonly origin: string ;
    /**
     * @description The route's AS path sequence.
     */
    readonly asPath: string ;
    /**
     * @description The route's weight.
     */
    readonly weight: int32;
}
