
/**
 * @extensible
 * @description Describes what transforms applied before matching.
 * @since 2019-07-01
 */
export enum WebApplicationFirewallTransform {
    /**
     *
     */
    Lowercase = 'Lowercase',
    /**
     *
     */
    Trim = 'Trim',
    /**
     *
     */
    UrlDecode = 'UrlDecode',
    /**
     *
     */
    UrlEncode = 'UrlEncode',
    /**
     *
     */
    RemoveNulls = 'RemoveNulls',
    /**
     *
     */
    HtmlEntityDecode = 'HtmlEntityDecode'
}
