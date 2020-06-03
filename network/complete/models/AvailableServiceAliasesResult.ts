import { AvailableServiceAlias } from './AvailableServiceAlias';

/**
 * @description An array of available service aliases.
 * @since 2019-12-01
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
