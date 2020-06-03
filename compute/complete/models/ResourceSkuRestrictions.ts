import { ResourceSkuRestrictionsReasonCode } from '../enums/ResourceSkuRestrictionsReasonCode';
import { ResourceSkuRestrictionsType } from '../enums/ResourceSkuRestrictionsType';
import { ResourceSkuRestrictionInfo } from "./ResourceSkuRestrictionInfo";

/**
 * @description Describes scaling information of a SKU.
 * @since 2017-03-30
 */
export interface ResourceSkuRestrictions {
    /**
     * @description The type of restrictions.
     */
    readonly type: ResourceSkuRestrictionsType;
    /**
     * @description The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
     */
    readonly values: Array<string>;
    /**
     * @description The reason for restriction.
     */
    readonly reasonCode: ResourceSkuRestrictionsReasonCode;
    /** @description The information about the restriction where the SKU cannot be used.
     * @since 2018-06-01
     */
    readonly restrictionInfo: ResourceSkuRestrictionInfo;
}
