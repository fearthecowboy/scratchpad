import { ApplicationGatewayHeaderConfiguration } from './ApplicationGatewayHeaderConfiguration';
/**
 * @description Set of actions in the Rewrite Rule in Application Gateway.
 */
export interface ApplicationGatewayRewriteRuleActionSet {
    /**
     * @description Request Header Actions in the Action Set.
     */
    requestHeaderConfigurations: Array<ApplicationGatewayHeaderConfiguration>;
    /**
     * @description Response Header Actions in the Action Set.
     */
    responseHeaderConfigurations: Array<ApplicationGatewayHeaderConfiguration>;
}
