
/**
 * @description List of all Static Routes.
 * @since 2020-04-01
 */
export interface StaticRoute {
    /**
     * @description The name of the StaticRoute that is unique within a VnetRoute.
     */
    name: string;
    /**
     * @description List of all address prefixes.
     */
    addressPrefixes: Array<string>;
    /**
     * @description The ip address of the next hop.
     */
    nextHopIpAddress: string;
}
