import { MatchVariable } from './MatchVariable';
import { WebApplicationFirewallOperator } from '../enums/WebApplicationFirewallOperator';
import { WebApplicationFirewallTransform } from '../enums/WebApplicationFirewallTransform';
/**
 * @description Define match conditions.
 */
export interface MatchCondition {
    /**
     * @description List of match variables.
     */
    matchVariables?: Array<MatchVariable>;
    /**
     * @description The operator to be matched.
     */
    operator?: WebApplicationFirewallOperator | string;
    /**
     * @description Whether this is negate condition or not.
     */
    negationConditon: boolean;
    /**
     * @description Match value.
     */
    matchValues?: Array<string>;
    /**
     * @description List of transforms.
     */
    transforms: Array<WebApplicationFirewallTransform | string>;
}
