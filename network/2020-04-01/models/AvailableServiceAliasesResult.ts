import { AvailableServiceAlias } from './AvailableServiceAlias';
/**
 * @description An array of available service aliases.
 */
export interface AvailableServiceAliasesResult {
    /**
     * @description An array of available service aliases.
     */
    value: Array<AvailableServiceAlias>;
    /**
     * @description The URL to get the next set of results.
     */
    readonly nextLink: string ;
}
