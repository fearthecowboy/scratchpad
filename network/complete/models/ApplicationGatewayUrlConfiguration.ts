
/**
 * @description Url configuration of the Actions set in Application Gateway.
 * @since 2019-12-01
 */
export interface ApplicationGatewayUrlConfiguration {
    /**
     * @description Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null.
     */
    modifiedPath: string;
    /**
     * @description Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null.
     */
    modifiedQueryString: string;
    /**
     * @description If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false.
     */
    reroute: boolean;
}
