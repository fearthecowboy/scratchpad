import { WebApplicationFirewallMatchVariable } from '../enums/WebApplicationFirewallMatchVariable';
/**
 * @description Define match variables.
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
