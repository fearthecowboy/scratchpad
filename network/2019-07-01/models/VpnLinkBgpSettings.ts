
/**
 * @description BGP settings details for a link.
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
