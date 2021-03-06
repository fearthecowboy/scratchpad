import { ResourceSkuRestrictionsType } from '../enums/ResourceSkuRestrictionsType';
import { ResourceSkuRestrictionInfo } from './ResourceSkuRestrictionInfo';
import { ResourceSkuRestrictionsReasonCode } from '../enums/ResourceSkuRestrictionsReasonCode';
/**
 * @description Describes scaling information of a SKU.
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
     * @description The information about the restriction where the SKU cannot be used.
     */
    readonly restrictionInfo: ResourceSkuRestrictionInfo;
    /**
     * @description The reason for restriction.
     */
    readonly reasonCode: ResourceSkuRestrictionsReasonCode;
}
