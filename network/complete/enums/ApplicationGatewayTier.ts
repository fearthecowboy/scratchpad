
/**
 * @extensible
 * @description Tier of an application gateway. Possible values are: 'Standard' and 'WAF'.
 */
export enum ApplicationGatewayTier {
    /**
     *
     */
    Standard = 'Standard',
    /**
     *
     */
    WAF = 'WAF',
    /**
     * @since 2019-07-01
     */
    Standard_v2 = "Standard_v2",
    /**
     * @since 2019-07-01
     */
    WAF_v2 = "WAF_v2"
}
