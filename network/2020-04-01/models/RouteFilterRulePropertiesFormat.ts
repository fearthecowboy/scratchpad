import { Access } from '../enums/Access';
import { RouteFilterRuleType } from '../enums/RouteFilterRuleType';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Route Filter Rule Resource.
 */
export interface RouteFilterRulePropertiesFormat {
    /**
     * @description The access type of the rule.
     */
    access?: Access | string;
    /**
     * @description The rule type of the rule.
     */
    routeFilterRuleType?: RouteFilterRuleType | string;
    /**
     * @description The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
     */
    communities?: Array<string>;
    /**
     * @description The provisioning state of the route filter rule resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
