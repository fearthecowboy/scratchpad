import { ApplicationGatewayHeaderConfiguration } from './ApplicationGatewayHeaderConfiguration';
import { ApplicationGatewayUrlConfiguration } from "./ApplicationGatewayUrlConfiguration";

/**
 * @description Set of actions in the Rewrite Rule in Application Gateway.
 * @since 2019-07-01
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
    /** @description Url Configuration Action in the Action Set.
     * @since 2019-12-01
     */
    urlConfiguration: ApplicationGatewayUrlConfiguration;
}
