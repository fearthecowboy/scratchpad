
/**
 * @extensible
 * @description Transforms applied before matching.
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
