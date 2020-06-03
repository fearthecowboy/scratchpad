
/**
 * @description The ARP table associated with the ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitArpTable {
    /**
     * @description Entry age in minutes.
     */
    age: int32;
    /**
     * @description Interface address.
     */
    interface: string;
    /**
     * @description The IP address.
     */
    ipAddress: string;
    /**
     * @description The MAC address.
     */
    macAddress: string;
}
