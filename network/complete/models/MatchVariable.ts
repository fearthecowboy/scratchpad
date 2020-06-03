import { WebApplicationFirewallMatchVariable } from '../enums/WebApplicationFirewallMatchVariable';

/**
 * @description Define match variables.
 * @since 2019-07-01
 */
export interface MatchVariable {
    /**
     * @description Match Variable.
     */
    variableName?: WebApplicationFirewallMatchVariable | string;
    /**
     * @description Describes field of the matchVariable collection.
     */
    selector: string;
}
