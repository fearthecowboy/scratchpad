
/**
 * @description Parameters that define the source and destination endpoint.
 */
export interface NextHopParameters {
    /**
     * @description The resource identifier of the target resource against which the action is to be performed.
     */
    targetResourceId?: string;
    /**
     * @description The source IP address.
     */
    sourceIPAddress?: string;
    /**
     * @description The destination IP address.
     */
    destinationIPAddress?: string;
    /**
     * @description The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of the nics, then this parameter must be specified. Otherwise optional).
     */
    targetNicResourceId: string;
}
