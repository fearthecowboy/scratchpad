import { VirtualNetworkUsageName } from './VirtualNetworkUsageName';
/**
 * @description Usage details for subnet.
 */
export interface VirtualNetworkUsage {
    /**
     * @description Indicates number of IPs used from the Subnet.
     */
    readonly currentValue: double;
    /**
     * @description Subnet identifier.
     */
    readonly id: string ;
    /**
     * @description Indicates the size of the subnet.
     */
    readonly limit: double;
    /**
     * @description The name containing common and localized value for usage.
     */
    readonly name: VirtualNetworkUsageName;
    /**
     * @description Usage units. Returns 'Count'
     */
    readonly unit: string ;
}
