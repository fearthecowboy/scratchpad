
/**
 * @description BGP settings details for a link.
 * @since 2019-07-01
 */
export interface VpnLinkBgpSettings {
    /**
     * @description The BGP speaker's ASN.
     */
    asn: int64;
    /**
     * @description The BGP peering address and BGP identifier of this BGP speaker.
     */
    bgpPeeringAddress: string;
}
