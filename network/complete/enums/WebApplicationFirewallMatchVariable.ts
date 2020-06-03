
/**
 * @extensible
 * @description Match Variable.
 * @since 2019-07-01
 */
export enum WebApplicationFirewallMatchVariable {
    /**
     *
     */
    RemoteAddr = 'RemoteAddr',
    /**
     *
     */
    RequestMethod = 'RequestMethod',
    /**
     *
     */
    QueryString = 'QueryString',
    /**
     *
     */
    PostArgs = 'PostArgs',
    /**
     *
     */
    RequestUri = 'RequestUri',
    /**
     *
     */
    RequestHeaders = 'RequestHeaders',
    /**
     *
     */
    RequestBody = 'RequestBody',
    /**
     *
     */
    RequestCookies = 'RequestCookies'
}
