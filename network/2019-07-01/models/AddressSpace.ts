
/**
 * @description AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
 */
export interface AddressSpace {
    /**
     * @description A list of address blocks reserved for this virtual network in CIDR notation.
     */
    addressPrefixes: Array<string>;
}
