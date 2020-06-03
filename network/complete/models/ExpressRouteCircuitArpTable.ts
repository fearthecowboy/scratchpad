
/**
 * @description The ARP table associated with the ExpressRouteCircuit.
 */
export interface ExpressRouteCircuitArpTable {
    /**
     * @description Age
     */
    age: int32;
    /**
     * @description Interface
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
