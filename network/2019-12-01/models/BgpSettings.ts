import { IPConfigurationBgpPeeringAddress } from './IPConfigurationBgpPeeringAddress';
/**
 * @description BGP settings details.
 */
export interface BgpSettings {
    /**
     * @description The BGP speaker's ASN.
     */
    asn: int64;
    /**
     * @description The BGP peering address and BGP identifier of this BGP speaker.
     */
    bgpPeeringAddress: string;
    /**
     * @description The weight added to routes learned from this BGP speaker.
     */
    peerWeight: int32;
    /**
     * @description BGP peering address with IP configuration ID for virtual network gateway.
     */
    bgpPeeringAddresses: Array<IPConfigurationBgpPeeringAddress>;
}
