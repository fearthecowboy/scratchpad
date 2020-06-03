
/**
 * @description Contains bgp community information offered in Service Community resources.
 */
export interface BGPCommunity {
    /**
     * @description The region which the service support. e.g. For O365, region is Global.
     */
    serviceSupportedRegion: string;
    /**
     * @description The name of the bgp community. e.g. Skype.
     */
    communityName: string;
    /**
     * @description The value of the bgp community. For more information: https://docs.microsoft.com/en-us/azure/expressroute/expressroute-routing.
     */
    communityValue: string;
    /**
     * @description The prefixes that the bgp community contains.
     */
    communityPrefixes: Array<string>;
    /**
     * @description Customer is authorized to use bgp community or not.
     */
    isAuthorizedToUse: boolean;
    /**
     * @description The service group of the bgp community contains.
     */
    serviceGroup: string;
}
