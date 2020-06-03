import { ResourceSkuCapabilities } from './ResourceSkuCapabilities';
import { ResourceSkuCapacity } from './ResourceSkuCapacity';
import { ResourceSkuCosts } from './ResourceSkuCosts';
import { ResourceSkuLocationInfo } from "./ResourceSkuLocationInfo";
import { ResourceSkuRestrictions } from './ResourceSkuRestrictions';

/**
 * @description Describes an available Compute SKU.
 * @since 2017-03-30
 */
export interface ResourceSku {
    /**
     * @description The type of resource the SKU applies to.
     */
    readonly resourceType: string ;
    /**
     * @description The name of SKU.
     */
    readonly name: string ;
    /**
     * @description Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**
     */
    readonly tier: string ;
    /**
     * @description The Size of the SKU.
     */
    readonly size: string ;
    /**
     * @description The Family of this particular SKU.
     */
    readonly family: string ;
    /**
     * @description The Kind of resources that are supported in this SKU.
     */
    readonly kind: string ;
    /**
     * @description Specifies the number of virtual machines in the scale set.
     */
    readonly capacity: ResourceSkuCapacity;
    /**
     * @description The set of locations that the SKU is available.
     */
    readonly locations: Array<string>;
    /**
     * @description The api versions that support this SKU.
     */
    readonly apiVersions: Array<string>;
    /**
     * @description Metadata for retrieving price info.
     */
    readonly costs: Array<ResourceSkuCosts>;
    /**
     * @description A name value pair to describe the capability.
     */
    readonly capabilities: Array<ResourceSkuCapabilities>;
    /**
     * @description The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
     */
    readonly restrictions: Array<ResourceSkuRestrictions>;
    /** @description A list of locations and availability zones in those locations where the SKU is available.
     * @since 2018-06-01
     */
    readonly locationInfo: Array<ResourceSkuLocationInfo>;
}
