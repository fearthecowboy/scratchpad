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
     * @description The selector of match variable.
     */
    selector: string;
}
