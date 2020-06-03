import { SubResource } from './SubResource';
import { IpAllocationType } from '../enums/IpAllocationType';
import { IPVersion } from '../enums/IPVersion';
/**
 * @description Properties of the IpAllocation.
 */
export interface IpAllocationPropertiesFormat {
    /**
     * @description The Subnet that using the prefix of this IpAllocation resource.
     */
    readonly subnet: SubResource;
    /**
     * @description The VirtualNetwork that using the prefix of this IpAllocation resource.
     */
    readonly virtualNetwork: SubResource;
    /**
     * @description The type for the IpAllocation.
     */
    type: IpAllocationType | string;
    /**
     * @description The address prefix for the IpAllocation.
     */
    prefix: string;
    /**
     * @description The address prefix length for the IpAllocation.
     */
    prefixLength: int64;
    /**
     * @description The address prefix Type for the IpAllocation.
     */
    prefixType: IPVersion | string;
    /**
     * @description The IPAM allocation ID.
     */
    ipamAllocationId: string;
    /**
     * @description IpAllocation tags.
     */
    allocationTags: Dictionary<string>;
}
