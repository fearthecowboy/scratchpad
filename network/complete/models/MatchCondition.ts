import { WebApplicationFirewallOperator } from '../enums/WebApplicationFirewallOperator';
import { WebApplicationFirewallTransform } from '../enums/WebApplicationFirewallTransform';
import { MatchVariable } from './MatchVariable';

/**
 * @description Define match conditions.
 * @since 2019-07-01
 */
export interface MatchCondition {
    /**
     * @description List of match variables.
     */
    matchVariables?: Array<MatchVariable>;
    /**
     * @description Describes operator to be matched.
     */
    operator?: WebApplicationFirewallOperator | string;
    /**
     * @description Describes if this is negate condition or not.
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
