import { Access } from '../enums/Access';
import { ProvisioningState } from "../enums/ProvisioningState";
import { RouteFilterRuleType } from '../enums/RouteFilterRuleType';

/**
 * @description Route Filter Rule Resource
 * @since 2017-11-01
 */
export interface RouteFilterRulePropertiesFormat {
    /**
     * @description The access type of the rule. Valid values are: 'Allow', 'Deny'
     */
    access?: Access | string;
    /**
     * @description The rule type of the rule. Valid value is: 'Community'
     */
    routeFilterRuleType?: RouteFilterRuleType | string;
    /**
     * @description The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
     */
    communities?: Array<string>;
    /**
     * @description The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
}
