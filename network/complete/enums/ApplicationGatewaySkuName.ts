
/**
 * @extensible
 * @description Name of an application gateway SKU. Possible values are: 'Standard_Small', 'Standard_Medium', 'Standard_Large', 'WAF_Medium', and 'WAF_Large'.
 */
export enum ApplicationGatewaySkuName {
    /**
     *
     */
    Standard_Small = 'Standard_Small',
    /**
     *
     */
    Standard_Medium = 'Standard_Medium',
    /**
     *
     */
    Standard_Large = 'Standard_Large',
    /**
     *
     */
    WAF_Medium = 'WAF_Medium',
    /**
     *
     */
    WAF_Large = 'WAF_Large',
    /**
     * @since 2019-07-01
     */
    Standard_v2 = "Standard_v2",
    /**
     * @since 2019-07-01
     */
    WAF_v2 = "WAF_v2"
}
