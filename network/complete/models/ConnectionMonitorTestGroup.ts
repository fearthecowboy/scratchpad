
/**
 * @description Describes the connection monitor test group.
 * @since 2019-12-01
 */
export interface ConnectionMonitorTestGroup {
    /**
     * @description The name of the connection monitor test group.
     */
    name?: string;
    /**
     * @description Value indicating whether test group is disabled.
     */
    disable: boolean;
    /**
     * @description List of test configuration names.
     */
    testConfigurations?: Array<string>;
    /**
     * @description List of source endpoint names.
     */
    sources?: Array<string>;
    /**
     * @description List of destination endpoint names.
     */
    destinations?: Array<string>;
}
